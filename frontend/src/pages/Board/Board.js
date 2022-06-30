import * as React from "react";
import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const headerStyle = {
    marginTop: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "150px",
};

const headerStyle2 = {
    width: "50%",
    height: "70px",
    fontSize: "20px",
    border: "1px solid black",
    marginLeft: "30px",
    lineHeight: "70px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const Contents_one = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const Contents_two = {
    fontSize: "20px",
    borderRadius: "10px",
    border: "1px solid black",
    width: "50%",
    marginTop: "30px",
    marginLeft: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const headerStyle3 = {
    height: "70px",
    lineHeight: "70px",
};

const btnWrapper = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "80px",
};

function Board({ open, setOpen }) {
    //const [open, setOpen] = React.useState(true);

    const [OrderName, setOrderName] = useState("파파존스");
    const [OrderTime, setOrderTime] = useState("20:00");
    const [OrderMenu, setOrderMenu] = useState("존스페이보릿");
    const location = useLocation();

  return (
    <>
    <Box>
        <div style={headerStyle}>
            <h1>게시판</h1>
        </div>
    </Box>
    <Box style={Contents_one}>
        <div style={headerStyle2}>
            A님은 {OrderName} {OrderTime} {OrderMenu}를 주문했어요!
        </div>    
    </Box>
    <Box>
        <div style={Contents_two}>
        <div style={headerStyle3}>
            C님이 댓글을 달아서 주문을 진행해주세요!
          </div>
          <BoardInput label={"주문희망 브랜드"} divShow={"none"} />
          <BoardInput label={"주문희망 시간"} divShow={"none"} />
          <BoardInput label={"주문희망 메뉴"} divShow={"block"} />
          <BoardInput label={"총 금액"} divShow={"none"} />
          <BoardInput label={"전달 사항"} divShow={"none"} />
          <div style={btnWrapper}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"등록 완료"} />
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"등록 취소"} />
            </Link>
          </div>
        </div>
    </Box>
    </>
  );
}

export default Board;
