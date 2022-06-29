import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BoardInput from "../../components/EtcItem/BoardInput";
import UnstyledButtonsSimple from "../../components/EtcItem/BasicButton";
import { Link, useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";

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

function NewMenu({ open, setOpen }) {
  //const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
  });
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [form, setForm] = useState({
    brand: "",
    date: "2022-06-30",
    time: "13:10:20",
    cost: 0,
    description: "",
  });
  const [menu, setMenu] = useState();

  useEffect(() => {
    tokenVerify();
    getUser();
    getMyLocation();
  }, []);
  const tokenVerify = async () => {
    await authApi
      .tokenVerify({
        token: sessionStorage.getItem("refresh_token"), // refresh_token 던지기
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        // 만약 refresh_token 외의 것이 온다면 (window.sessionStorage.getItem('아무거나') 또는 )
        alert("잘못된 접근");
        navigate("/login");
      });
  };
  const getMyLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };
  const getUser = async () => {
    await authApi
      .getUser(sessionStorage.getItem("user_id"))
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };
  const handlingForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log({
      brand: form.brand,
      order_time: form.time + " " + form.date,
      latitude: latitude,
      longitude: longitude,
      address: latitude + " " + longitude,
      leader: user.id,
    });
  };
  const writeMenu = (e) => {
    const value = e.target.value;
    setMenu(value);
  };

  return (
    <>
      <Box>
        <div style={headerStyle}>
          <h1>새 메뉴 작성하기</h1>
        </div>
      </Box>
      <Box style={Contents_one}>
        <div style={headerStyle2}>
          {user.username}님은 어떤 음식을 주문할건가요?
        </div>

        <div style={Contents_two}>
          <BoardInput
            label={"주문희망브랜드"}
            name="brand"
            value={form.brand}
            onChange={handlingForm}
          />
          <BoardInput
            label={"주문희망날짜"}
            name="date"
            value={form.date}
            onChange={handlingForm}
          />
          <BoardInput
            label={"주문희망시간"}
            name="time"
            value={form.time}
            onChange={handlingForm}
          />
          <BoardInput
            label={"주문희망메뉴"}
            name="menu"
            value={menu}
            onChange={writeMenu}
          />
          <BoardInput
            label={"총 금액"}
            name="cost"
            value={form.cost}
            onChange={handlingForm}
          />
          <BoardInput
            label={"전달 사항"}
            name="description"
            value={form.description}
            onChange={handlingForm}
          />
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

export default NewMenu;
