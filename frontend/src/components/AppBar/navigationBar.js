import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import getPosition from "./Position";
import authApi from "../../api/authApi";

const addressStyle = {
  marginTop: "0px",
  marginLeft:"300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "35px",
  width: "500px",
  borderRadius: "10px",
  backgroundColor: "rgb(255, 181, 98)"
};

export default function PrimarySearchAppBar() {

  const menuId = "primary-search-account-menu";
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const tokenVerify = async () => {
    await authApi
      .tokenVerify({
        token: sessionStorage.getItem("refresh_token"), // refresh_token 던지기
      })
      .then((res) => {
        console.log("tokenverify", res);
        setIsLogin(true);
      })
      .catch((err) => {
        setIsLogin(false);
      });
  };
  useEffect(() => {
    // 빈리스트면 페이지 한번 로딩되었을 때 딱 한번 지정
    if (sessionStorage.getItem("refresh_token")) {
      // 만약 refresh_token 이 온다면
      tokenVerify(); // getUser() 메서드 호출
    } else {
      setIsLogin(false);
    }
    console.log("useEffect");
  });
  const logout = async () => {
    await authApi
      .logout()
      .then((res) => {
        console.log("로그아웃 성공");
        sessionStorage.clear();
        setIsLogin(false);
      })
      .catch((e) => console.log(e));
  };
  const handlingNavigateIcon = () => {
    if (isLogin) {
      return <button onClick={logout}>Logout</button>;
    } else {
      return (
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
          onClick={() => navigate("/login")}
        >
          <AccountCircle />
        </IconButton>
      );
    }
  };
  
  return (
    <AppBar position="absolute" style={{ backgroundColor: "orange" }}>
      <Toolbar>
        <IconButton sx={{ p: 0 }} onClick={() => navigate("/")}>
          <Avatar
            alt="logoImage"
            src="https://o.remove.bg/downloads/ced6007b-0e61-47ea-9373-a940b5f9cc24/image__3_-removebg-preview.png"
          />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" }, fontWeight: 700 }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          EATOGETHER
        </Typography>
        <Box>
          <div style={addressStyle}>
            {/* <h4>주소</h4> */}
            <h4>{getPosition.latitude}</h4>
          </div>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
        {handlingNavigateIcon()}
      </Toolbar>
    </AppBar>
  );
}
