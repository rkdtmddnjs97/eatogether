import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import CreateIcon from "@mui/icons-material/Create";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";

const WrapStyle = {
  width: "50%",
  position: "fixed",
  bottom: "5%",
  left: "25%",
  zIndex: "1200",
  boxShadow: "3px 3px #ababab54",
};

const BottomNavigationStyle = {
  justifyContent: "space-around",
  borderRadius: "8px",
};

export default function SimpleBottomNavigation({ setOpen, orderId }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <Box style={WrapStyle}>
      <BottomNavigation
        style={BottomNavigationStyle}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            navigate("/newMenu");
          }}
          label="새 메뉴 작성"
          icon={<CreateIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/Board", {
              state: {
                orderId: orderId,
              },
            });
          }}
          label="참여하기"
          icon={<TaskAltIcon />}
        />
        <BottomNavigationAction
          onClick={() => {
            navigate("/chat");
          }}
          label="채팅"
          icon={<ContactsIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
