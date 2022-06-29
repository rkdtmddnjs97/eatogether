import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import getPosition from './Position';

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

const menuId = 'primary-search-account-menu';
  
  return (
      <AppBar position="absolute" style={{ backgroundColor:"orange"}}>
        <Toolbar>
        <IconButton 
            sx={{ p: 0 }}
            onClick={() => {
              window.location.href = '/';
              }}  
        >
            <Avatar alt="logoImage" src="https://o.remove.bg/downloads/ced6007b-0e61-47ea-9373-a940b5f9cc24/image__3_-removebg-preview.png" />
            </IconButton>
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
          <Box>
            <div style={addressStyle}>
              {/* <h4>주소</h4> */}
              <h4>{getPosition.latitude}</h4>
            </div>
          </Box>
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
