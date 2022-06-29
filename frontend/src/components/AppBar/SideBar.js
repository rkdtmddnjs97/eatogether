import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CreateIcon from "@mui/icons-material/Create";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Link } from "react-router-dom";
import ListItem from "../EtcItem/Listitem";
import PaginationControlled from "../EtcItem/Pagination";
import axios from "axios";

const WrapStyle = {
  width: "300px",
  height: "70%",
  position: "fixed",
  bottom: "15%",
  left: "3%",
  zIndex: "1200",
  backgroundColor: "white",
  boxShadow: "3px 3px #ababab54",
  borderRadius: "8px",
};

const headerStyle = {
  textAlign: "center",
};

export default function SideBar(props) {
  console.log("??", props.orders);

  return (
    <Box style={WrapStyle}>
      <h1 style={headerStyle}>Order List</h1>
      {props.orders.map((item) => {
        return <ListItem key={item.id} brand={item.brand} time={item.time}/>;
      })}
      <PaginationControlled />
    </Box>
  );
}
