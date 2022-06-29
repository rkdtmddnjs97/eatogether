import * as React from "react";
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { Link } from "react-router-dom";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton"
import { textAlign } from "@mui/system";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
};

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  }); 

  const handlingForm = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value });
  };
  
  console.log("form", form);
  const authRegister = async() => {
    await axios
    .post("http://localhost:8000/registration/", {
      username: form.username,
      email: form.email,
      password1: form.password1,
      password2: form.password2,
    })
    .then((res) => {
      sessionStorage.setItem("user_id", res.data.user["pk"]);
      sessionStorage.setItem("access_token", res.data["access_token"]);
      sessionStorage.setItem("refresh_token", res.data["refresh_token"]);
      alert("회원가입에 성공했어요!😊");
      navigate("/login"); // 로그인으로 보내기
    })
    .catch((e) => {
      console.log(e);
      alert("회원가입에 실패했어요😂 다시 시도하세요");
    });
  };
    return (
        <div>
    <Sheet
        variant="plain"
        sx={{
            maxWidth: 550,
            mx: 'auto', // margin left & right
            my: 14, // margin top & botom
            py: 4, // padding top & bottom
            px: 5, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
            borderRadius: 'lg', 
            boxShadow: 'lg',
        }}
    >
    <div style={headerStyle}>
        <h1>가입하기</h1>
    </div>
  <TextField
    // html input attribute
    name="username"
    type="userId"
    placeholder="eatogether"
    label="아이디"
    value={form.username}
    onChange={handlingForm}
  />
  <TextField
    name="email"
    type="email"
    placeholder="email"
    label="이메일"
    value={form.email}
    onChange={handlingForm}
    />
  <TextField
    name="password1"
    type="password"
    placeholder="password"
    label="비밀번호"
    value={form.password1}
    onChange={handlingForm}
  />
  <TextField
    name="password2"
    type="password"
    placeholder="password"
    label="비밀번호 확인"
    value={form.password2}
    onChange={handlingForm}
  />
  <Button
    variant="soft"
    color="orange"
    size="lg"
    borderRadius="10px"
    onClick={authRegister}
  >
    가입하기
  </Button>
</Sheet>
        </div>
    );
}

export default SignUp;