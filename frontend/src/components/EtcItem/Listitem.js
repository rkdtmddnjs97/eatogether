import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CreateIcon from "@mui/icons-material/Create";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";

const WrapStyle = {
  width: "100%",
  height: "60px",
  display: "flex",
};

const headerStyle = {
  textAlign: "center",
};

const IconBoxStyle = {
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const IconStyle = {
  width: "34px",
  height: "34px",
  backgroundColor: "red",
  border: "1px solid black",
  borderRadius: "30px",
};

export default function ListItem(props) {
  return (
    <Box style={WrapStyle}>
      <div style={IconBoxStyle}>
        <div style={IconStyle}></div>
      </div>
      <p style={{ lineHeight: "26px" }}>
        {props.brand} 18:00가 기다리는 중이에요
      </p>
    </Box>
  );
}
