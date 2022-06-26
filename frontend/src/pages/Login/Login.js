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
    
  <Sheet
    variant="plain"
    sx={{
      maxWidth: 500,
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
    <div>
    <Typography level="h1" component="h1">
      <h1>Welcome to Eatogether!</h1>
    </Typography>
    </div>
  <TextField
    // html input attribute
    name="email"
    type="email"
    placeholder="eatogether@email.com"
    label="Email"
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
  );
}

export default Login;



