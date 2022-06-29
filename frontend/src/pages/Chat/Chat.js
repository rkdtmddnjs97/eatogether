import * as React from "react";
import Box from '@mui/material/Box';
import BoardInput from "../../components/EtcItem/BoardInput"
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton"
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

const headerStyle = {
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
    borderRadius: "0px",
    border: "2px solid black",
    backgroundColor: "lightgrey"
};

const headerStyle2 = {
    height: "70px",
    fontSize: "20px",
    border: "2px solid black",
    lineHeight: "70px",
    display: "flex",
    justifyContent: "left",
};

const headerStyle3 = {
    height: "70px",
    fontSize: "15px",
    border: "2px solid black",
    lineHeight: "70px",
    display: "flex",
    justifyContent: "left",
};

const Contents_one = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

export default function Chat() {
    return(
        <>
        <Box>
        <div style={headerStyle}>
            <h1>A님과 BBQ 배달비 2빵 주문을 작성하세요</h1>
        </div>
        </Box>
        <Box>
        <div style={headerStyle2}>
        ㅤㅤㅤA님은 BBQ 18:00 황금올리브를 주문했어요
        </div>
        </Box>
        <Box>
        <div style={headerStyle3}>
            ㅤㅤㅤㅤ현재 댓글이 없어요. 댓글을 남겨서 주문을 진행해주세요!ㅤㅤㅤ
            <div onClick={btnClicked}>
            <UnstyledButtonsSimple label={"댓글달기"} />
            </div>
        </div>
        </Box>
        </>
    );
}

const btnClicked = () => {

}
