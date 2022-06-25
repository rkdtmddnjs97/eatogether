const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');    // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
        center: new kakao.maps.LatLng(37.610632352771624, 126.99701001706818), // 지도의 중심좌표
        level: 3                                             
    };
    const map = new kakao.maps.Map(container, options);
    
    // 사용자 자신의 마커
    const imageSrc = 'https://cdn-icons-png.flaticon.com/512/7902/7902187.png'
    const imageSize = new kakao.maps.Size(54, 59) 
    const imageOption = {offset: new kakao.maps.Point(27, 69)};
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
    const markerPosition  = new kakao.maps.LatLng(37.610632352771624, 126.99701001706818);
    const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage 
    });
    // 사용자 자신의 마커 위 주문정보 표시
    const iwContent = '<div style=padding:50px;>BBQ<br>18:00</div>',
    iwPosition = new kakao.maps.LatLng(37.610632352771624, 126.99701001706818);
    const infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });

    // 다른 사용자의 마커
    const otherPositions = [
        {
            title: 'user1',
            latlng: new kakao.maps.LatLng(37.61095672774752,  126.99788208622464)
        },
        {
            title: 'user2',
            latlng: new kakao.maps.LatLng(37.61098369877348, 126.99571886793557)
        }
    ];
    const otherImageSrc = "https://cdn-icons-png.flaticon.com/512/7902/7902125.png";
    for (var i = 0;  i<otherPositions.length; i++) {
        const otherImageSize = new kakao.maps.Size(44, 49);
        const otherMarkerImage = new kakao.maps.MarkerImage(otherImageSrc, otherImageSize);
    const otherMarker = new kakao.maps.Marker({
        map: map,
        position: otherPositions[i].latlng,
        title: otherPositions[i].title,
        image: otherMarkerImage
    });
    otherMarker.setMap(map);
    }

    // 지도에 표시할 원 생성(사용자 자신의 주소로부터 범위)
    const circle = new kakao.maps.Circle({
    center : new kakao.maps.LatLng(37.610632352771624, 126.99701001706818),  // 원의 중심좌표
    radius: 150, 
    strokeWeight: 5,
    strokeColor: '#75B8FA', 
    strokeOpacity: 1, 
    strokeStyle: 'dashed', 
    fillColor: '#CFE7FF', 
    fillOpacity: 0.5    
}); 

// 지도에 원을 표시
circle.setMap(map); 
// 지도에 자용자 자신의 마커 표시
marker.setMap(map); 
//지도 위 마커 주문정보 표시
infowindow.open(map, marker);

}
