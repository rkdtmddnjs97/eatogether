import { Link } from "react-router-dom";

const { kakao } = window;

function KakaoMapScript(
  latitude = 37.610632352771624,
  longitude = 126.99701001706818,
  orders = []
) {
  const myLocation = new kakao.maps.LatLng(latitude, longitude); // 내 주소

  const container = document.getElementById("myMap"); // 지도를 담을 영역의 DOM 레퍼런스
  console.log("센터 위도경도", latitude, longitude);
  const options = {
    center: myLocation, // 지도의 중심좌표
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);

  // 사용자 자신의 마커
  const imageSrc = "https://cdn-icons-png.flaticon.com/512/7902/7902187.png";
  const imageSize = new kakao.maps.Size(54, 59);
  const imageOption = { offset: new kakao.maps.Point(27, 69) };
  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );
  const marker = new kakao.maps.Marker({
    position: myLocation,
    image: markerImage,
  });

  // 사용자 자신의 마커 위 주문정보 표시
  const iwContent =
    '<div style=padding:20px; class="marker">BBQ<br>18:00</div>';
  const infowindow = new kakao.maps.InfoWindow({
    position: myLocation,
    content: iwContent,
  });

  // 지도에 표시할 원 생성(사용자 자신의 주소로부터 범위)
  const circle = new kakao.maps.Circle({
    center: new kakao.maps.LatLng(latitude, longitude), // 원의 중심좌표==사용자의 주소
    radius: 150,
    strokeWeight: 5,
    strokeColor: "#75B8FA",
    strokeOpacity: 1,
    strokeStyle: "dashed",
    fillColor: "#CFE7FF",
    fillOpacity: 0.5,
  });

  // 지도에 원을 표시
  circle.setMap(map);
  // 지도에 자용자 자신의 마커 표시
  marker.setMap(map);
  //지도 위 마커 주문정보 표시
  // infowindow.open(map, marker);

  map.setCenter(myLocation);

  // 주문정보 clickEvent

  return map;
}

function OrderMarker(orders, map, setOrderId) {
  let mapOrders = orders.map((items) => {
    return {
      title: items.username,
      latlng: new kakao.maps.LatLng(items.latitude, items.longitude),
      content: `<div style=padding:20px; class="marker" id =${items.id}>${items.brand}<br>${items.order_time}</div>`,
    };
  });

  const otherImageSrc =
    "https://cdn-icons-png.flaticon.com/512/7902/7902125.png";

  const otherImageSize = new kakao.maps.Size(44, 49);
  for (var i = 0; i < mapOrders.length; i++) {
    const otherMarkerImage = new kakao.maps.MarkerImage(
      otherImageSrc,
      otherImageSize
    );
    const otherMarker = new kakao.maps.Marker({
      map: map,
      position: mapOrders[i].latlng,
      title: mapOrders[i].title,
      image: otherMarkerImage,
    });
    otherMarker.setMap(map);

    //infowindow
    // 다른 사용자의 마커 위 주문정보 표시
    const otherInfowindow = new kakao.maps.InfoWindow({
      position: mapOrders[i].latlng,
      content: mapOrders[i].content,
    });
    otherInfowindow.setZIndex(1);
    otherInfowindow.open(map, otherMarker);
    kakao.maps.event.addListener(otherMarker, "click", function () {
      // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
      otherInfowindow.setZIndex(2);
    });
  }
  let markers = document.querySelectorAll(".marker");
  for (let marker of markers) {
    marker.value = "off";
    marker.addEventListener("click", (e) => {
      if (e.target.value === "off") {
        // 주문진행
        let button1 = document.createElement("button");
        button1.innerText = "주문진행";
        button1.style.backgroundColor = "pink";
        button1.style.color = "white";
        button1.style.borderColor = "pink";
        button1.style.width = "100px";
        button1.style.fontSize = "12px";
        button1.id = `order_button_${e.target.id}`;
        e.target.appendChild(button1);
        // 주문취소
        let button2 = document.createElement("button");
        button2.innerText = "주문취소";
        button2.style.backgroundColor = "green";
        button2.style.color = "white";
        button2.style.borderColor = "green";
        button2.style.width = "100px";
        button2.style.fontSize = "12px";
        button2.id = `cancel_button_${e.target.id}`;
        e.target.appendChild(button2);
        setOrderId(e.target.id);
        e.target.value = "on";
      } else {
        let button1 = e.target.children[1];
        let button2 = e.target.children[2];
        e.target.removeChild(button1);
        e.target.removeChild(button2);
        e.target.value = "off";
        setOrderId(0);
      }
    });
  }
}

export { KakaoMapScript, OrderMarker };
