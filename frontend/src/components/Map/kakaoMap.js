const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3                                              // 지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);

}