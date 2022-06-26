import { useEffect, useState } from "react";
import KakaoMapScript from "../../components/Map/kakaoMap";
import SimpleBottomNavigation from "../../components/AppBar/BottomBar";
import SideBar from "../../components/AppBar/SideBar";
import Board from "../../pages/Board/Board"

function Home() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    KakaoMapScript();
  }, []);

return (
  <>
    <div id='myMap' style={{
        position: 'absolute',
        width: '100%', 
        height: '100%',
        top: "0px",
    }}></div>
    <SimpleBottomNavigation setOpen={setOpen}/>
    <SideBar />
    <Board open={open} setOpen={setOpen}/>
  </>
);
}

export default Home;

