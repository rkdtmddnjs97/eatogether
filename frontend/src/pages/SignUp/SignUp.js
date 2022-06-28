import * as React from "react";
import Sheet from '@mui/joy/Sheet';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import { Link } from "react-router-dom";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton"
import { textAlign } from "@mui/system";

const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
};

function SignUp() {
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
  <TextField
    name="CheckUserPassword"
    type="CheckUserPassword"
    placeholder="password"
    label="비밀번호 확인"
  />
  <Button
    variant="soft"
    color="orange"
    size="lg"
    borderRadius="10px"
  >
    가입하기
  </Button>
</Sheet>
        </div>
    );
}

export default SignUp;