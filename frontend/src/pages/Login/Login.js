import * as React from "react";
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
//<link rel="stylesheet" href="./Login.css"></link>

function Login() {
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
    name="userId"
    type="userId"
    placeholder="eatogether"
    label="아이디"
  />
  <TextField
    name="userPassword"
    type="userPassword"
    placeholder="password"
    label="비밀번호"
  />
  <Button
    variant="soft"
    color="orange"
    size="lg"
  >
    로그인
  </Button>
  <Typography
    endDecorator={<Link to="/signUp">가입하기</Link>}
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



