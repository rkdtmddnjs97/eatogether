export default function getPosition() {
    const latitude = navigator.geolocation.getCurrentPosition.latitude
    const longitude = navigator.geolocation.getCurrentPosition.longitude
    console.log(latitude)
    console.log(longitude)
}