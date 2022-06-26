import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
// react-redirect를 이용한 페이지 이동
//import { BrowserRouter, Route, Routes } from "react-router-dom";
//import Login from "../../pages/Login/Login"

const Search = styled('div')(({ theme }) => ({
  position: 'absolute',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: 300,
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(30)})`,
    paddingRight: `calc(1em + ${theme.spacing(10)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

const menuId = 'primary-search-account-menu';
  
  return (
      <AppBar position="absolute" style={{ backgroundColor:"orange"}}> 
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },
                  fontWeight: 700, }}
            onClick={() => {
              window.location.href = '/';
              }}  
          >
            EATOGETHER
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="주소를 입력해주세요"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
