import { useState } from "react";
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  }); 
  const handlingForm = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]: value});
  };
  console.log("form", form);
  const authLogin = async () => {
    await axios
    .post("http://localhost:8000/rest-auth/login", {
      usernmae: form.username,
      email: form.email,
      password: form.password,
    }).then((res) => {
      sessionStorage.setItem("user_id", res.data.user["pk"]);
      sessionStorage.setItem("access_token", res.data["access_token"]);
      sessionStorage.setItem("refresh_token", res.data["refresh_token"]);
      navigate("/"); // 집으로 보내기
    })
    .catch((e) => {
      console.log(e);
      alert("로그인이 실패했어요. 다시 시도하세요");
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
        <h1>Eatogether는 당신을 기다리고있어요!</h1>
          <TextField
            // html input attribute
            name="username"
            type="userId"
            placeholder="username"
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
            name="password"
            type="userPassword"
            placeholder="password"
            label="비밀번호"
            value={form.password}
            onChange={handlingForm}
          />
          <Button variant="soft" color="orange" size="lg" onClick={authLogin}>
            로그인
          </Button>
          <Typography
            endDecorator={<Link to="/login/signUp">가입하기</Link>}
            fontSize="md"
            sx={{ alignSelf: 'center' }}
          >
            eatogether가 처음이신가요?
          </Typography>
      </Sheet>
    </div>
  );
}

export default Login;



