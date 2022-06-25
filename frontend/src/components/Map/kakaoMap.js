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
    // 지도에 표시할 원 생성(사용자의 주소로부터 범위)
    const circle = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.610632352771624, 126.99701001706818),  // 원의 중심좌표
    radius: 150, // 미터 단위
    strokeWeight: 5, // 선의 두께 
    strokeColor: '#75B8FA', // 선의 색깔
    strokeOpacity: 1, // 선의 불투명도
    strokeStyle: 'dashed', // 선의 스타일
    fillColor: '#CFE7FF', // 채우기 색깔
    fillOpacity: 0.5  // 채우기 불투명도   
}); 

// 지도에 원을 표시합니다 
circle.setMap(map); 

    marker.setMap(map); 

}