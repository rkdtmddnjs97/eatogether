import { useEffect, useState } from "react";
import { KakaoMapScript, OrderMarker } from "../../components/Map/kakaoMap";
import SimpleBottomNavigation from "../../components/AppBar/BottomBar";
import SideBar from "../../components/AppBar/SideBar";
import Board from "../../pages/Board/Board";
import orderAPI from "../../api/orderAPI";

function Home() {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    getMyLocation();
  }, []);

  const getOrderList = async (lat, lon, map) => {
    await orderAPI
      .getOrders({
        lon: lon,
        lat: lat,
      })

      .then((res) => {
        setOrders(res.data);
        OrderMarker(res.data, map, setOrderId);
      })
      .catch((e) => console.log(e));
  };

  const getMyLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      const map = KakaoMapScript(
        position.coords.latitude,
        position.coords.longitude
      );
      getOrderList(position.coords.latitude, position.coords.longitude, map);
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

    <SimpleBottomNavigation setOpen={setOpen} orderId={orderId} />
      <SideBar orders={orders} />
      <Board open={open} setOpen={setOpen} />
    </>

  );
}
export default Home;
