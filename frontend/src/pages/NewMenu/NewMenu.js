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
          token: sessionStorage.getItem("refresh_token"), // refresh_token ?????????
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          // ?????? refresh_token ?????? ?????? ????????? (window.sessionStorage.getItem('????????????') ?????? )
          alert("????????? ??????");
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
        <h1>??? ?????? ????????????</h1>
        </div>
      </Box>
      <Box style={Contents_one}>
        <div style={headerStyle2}>
          {user.username}?????? ?????? ????????? ???????????????????
        </div>

        <div style={Contents_two}>
        <BoardInput
            label={"?????????????????????"}
            name="brand"
            value={form.brand}
            onChange={handlingForm}
          />
          <BoardInput
            label={"??????????????????"}
            name="date"
            value={form.date}
            onChange={handlingForm}
          />
          <BoardInput
            label={"??????????????????"}
            name="time"
            value={form.time}
            onChange={handlingForm}
          />
          <BoardInput
            label={"??????????????????"}
            name="menu"
            value={menu}
            onChange={writeMenu}
          />
          <BoardInput
            label={"??? ??????"}
            name="cost"
            value={form.cost}
            onChange={handlingForm}
          />
          <BoardInput
            label={"?????? ??????"}
            name="description"
            value={form.description}
            onChange={handlingForm}
          />
          <div style={btnWrapper}>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"?????? ??????"} />
            </Link>
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              <UnstyledButtonsSimple label={"?????? ??????"} />
            </Link>
          </div>
        </div>

        </Box>
    </>
  );
}

export default NewMenu;

