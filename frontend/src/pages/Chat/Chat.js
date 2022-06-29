import { useEffect, useState } from 'react';
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
    

    const navigate = useNavigate();
    const getUser = async() => {
        await axios
            .post("http://localhost:8000/rest-auth/token/verify/", {
                token: sessionStorage.getItem("refresh_token"), // refresh_token 던지기
            })
            .then((res) => { // 만약 refresh_token 이 온다면
                console.log(res);
            })
            .catch((err) => { // 만약 refresh_token 외의 것이 온다면 (window.sessionStorage.getItem('아무거나') 또는 )
                alert("잘못된 접근");
                navigate("/login");
            });
        };
        useEffect(() => { // 빈리스트면 페이지 한번 로딩되었을 때 딱 한번 지정 
            if(sessionStorage.getItem("refresh_token")) { // 만약 refresh_token 이 온다면
                getUser(); // getUser() 메서드 호출
            } else { // 만약 refresh_token 외의 것이 온다면
                alert("로그인을 하셔야 해요"); // 알림창 띄우고
                navigate("/login"); // 로그인 페이지로 이동
            }
        }, []);

    
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

