import { useEffect } from "react";
import KakaoMapScript from "../../components/Map/kakaoMap";

function Home() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

return (
    <div id='myMap' style={{
        width: '100vw',
        height: '100vh'
    }}></div>
);
}

export default Home;

