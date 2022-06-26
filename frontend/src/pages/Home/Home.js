import { useEffect, useState } from "react";
import KakaoMapScript from "../../components/Map/kakaoMap";
import SimpleBottomNavigation from "../../components/AppBar/BottomBar";
import SideBar from "../../components/AppBar/SideBar";
import JoinModal from "../../components/Modal/JoinModal";

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
        height: '100%' 
    }}></div>
    <SimpleBottomNavigation setOpen={setOpen}/>
    <SideBar />
    <JoinModal open={open} setOpen={setOpen}/>
  </>
);
}

export default Home;

