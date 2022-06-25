const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
        center: new kakao.maps.LatLng(37.610632352771624, 126.99701001706818), // 지도의 중심좌표
        level: 3                                              // 지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options);
    // 마커 생성
    const imageSrc = 'https://cdn-icons-png.flaticon.com/512/7902/7902187.png' // 마커이미지 주소   
    const imageSize = new kakao.maps.Size(54, 59) // 마커이미지 크기
    const imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition  = new kakao.maps.LatLng(37.610632352771624, 126.99701001706818);
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage 
    });

    marker.setMap(map); 

}