import * as React from "react";
import Box from '@mui/material/Box';
import BoardInput from "../../components/EtcItem/BoardInput"
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton"
import { Link } from "react-router-dom";
import { useState } from 'react';

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

const Contents_one = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

export default function Chat() {
    const [OrderName, setOrderName] = useState("파파존스")
    const [OrderTime, setOrderTime] = useState("20:00")
    const [OrderMin, setOrderMin] = useState("2빵")
    const [OrderMenu, setOrderMenu] = useState("존스페이보릿")

    const[Visible, setVisible] = useState("none")

    const btnClicked = () => {
        setVisible("flex");
        // document.getElementById("inputWrap").style.display = "flex";
    }

    const btnClicked2 = () => {
        setVisible("none");
        // document.getElementById("inputWrap").style.display = "none";
        let comment= document.createElement("p");
        comment.innerText = document.getElementById("inputWrap").children[0].getElementsByTagName("input")[0].value;

        document.getElementById("comment").appendChild(comment);
    }
    
    
    return(
        <>
        <Box>
        <div style={headerStyle}>
            <h1>A님과 {OrderName} 배달비 {OrderMin} 주문을 작성하세요</h1>
        </div>
        </Box>
        <Box>
        <div style={headerStyle2}>
            A님은 {OrderName} {OrderTime} {OrderMenu}를 주문했어요
        </div>
        </Box>
        <Box>
        <p>현재 댓글이 없어요. 댓글을 남겨서 주문을 진행해주세요!</p>
        <div>
            <div>
                <button type="button" onClick={btnClicked}>댓글</button>
            </div>
            <div id = "inputWrap" style={{display: `${Visible}`}}>
                <BoardInput label={"댓글"}/>
                <button type="button" onClick={btnClicked2}>입력</button>
            </div>
        </div>
        </Box>
        <div id="comment">

        </div>
        </>
    );
}

