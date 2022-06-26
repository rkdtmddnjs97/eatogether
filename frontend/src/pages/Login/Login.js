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
    name="username"
    type="username"
    placeholder="eatogether"
    label="User name"
  />
  <TextField
    name="password"
    type="password"
    placeholder="password"
    label="Password"
  />
  <Button
    variant="soft"
    color="orange"
    size="lg"
  >
    login
  </Button>
  <Typography
    endDecorator={<Link to="/signUp">Sign up</Link>}
    fontSize="md"
    sx={{ alignSelf: 'center' }}
  >
    Don't have an account?
  </Typography>
</Sheet>
</div>
  );
}

export default Login;



