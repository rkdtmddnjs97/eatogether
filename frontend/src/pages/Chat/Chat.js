import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BoardInput from "../../components/EtcItem/BoardInput"
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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

// SessionStorage는 LocalStorage와 동일한 기능을 가진 브라우저 저장소다.
// LocalStorage편에서도 말했듯 데이터를 저장하기 위해 일반적으로 DB를 사용한다.
// 하지만 장바구니, 사용자 정보(닉네임 같은 해킹 위험에 상대적으로 적은 정보)같은 데이터를 DB에 저장한다는건 
// 다소 비용 낭비일 수 있다. 데이터 저장의 목적이 아닌 휘발성 데이터를 저장하기 위한 목적으로 
// SessionStorage 또는 LocalStorage를 사용하면 좋을 것 같다.

// await 는 async 함수 안에서만 동작
// await = 
// async = 
// 자바스크립트는 기본적으로 비동기적으로 동작을 한다.
// 개발하다 보면 비동기식으로 동작하는 부분이 동기적으로 동작해야 하는 경우가 생긴다.
// 이럴 때 비동기식 동작이 동기식으로 동작하도록 해주는 걸 비동기 처리라고 한다.
// JS의 "비동기처리" = 1. 콜백함수 아용 / 2. Promise / 3. Promise를 활용한 async/await
// 먼저 시작된 작업의 완료 여부와는 상관없이 새로운 작업을 시작하는 방식
// await axios 는 promise 와는 다르게 에러를 핸들링할 수 있는 기능이 없다.
// 따라서 try-catch()문을 활용하여 에러를 핸들링해줘야 한다

function Chat() {
    const navigate = useNavigate();
    const getUser = async() => {
        await axios
            .post("http://localhost:8000/rest-auth/token/verify/", {
                token: sessionStorage.getItem("refresh_token"), // refresh_token 던지기
            })
        // await axios.post("url", {Data Object})
        // 
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
                    <h1>A님과 BBQ 배달비 2빵 주문을 작성하세요</h1>
                </div>
            </Box>
            <Box>
                <div style={headerStyle2}>
                    <h1>A님은 BBQ 18:00 황금올리브를 주문했어요</h1>
                </div>
            </Box>
            <Box>
                <div style={headerStyle3}>
                    <h1>현재 댓글이 없어요. 댓글을 남겨서 주문을 진행해주세요</h1>
                    <UnstyledButtonsSimple label={"댓글달기"} />
                </div>
            </Box>
        </>
    );
}

export default Chat;