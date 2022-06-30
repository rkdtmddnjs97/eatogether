import { useEffect, useState } from "react";
import { KakaoMapScript, OrderMarker } from "../../components/Map/kakaoMap";
import SimpleBottomNavigation from "../../components/AppBar/BottomBar";
import SideBar from "../../components/AppBar/SideBar";
import Board from "../../pages/Board/Board";
import axios from "axios";

function Home() {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyLocation();
    getOrderList();
  }, []);

  const getOrderList = async () => {
    await axios
      .get("http://localhost:8000/order/order/")
      .then((res) => {
        console.log("order_list", res.data);
        setOrders(res.data);
      })
      .catch((e) => console.log(e));
  };
  const getMyLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      KakaoMapScript(position.coords.latitude, position.coords.longitude);
      console.log("우리집?", position.coords.latitude);
      console.log("우리집?", position.coords.longitude);
    });
  };

  return (
    <>
      <div
        id="myMap"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <SimpleBottomNavigation setOpen={setOpen} />
      <SideBar orders={orders} />
      <Board open={open} setOpen={setOpen} />
    </>
  );
}

export default Home;
