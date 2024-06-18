// contact.js - 연락처 페이지의 JavaScript
function initMap() {
    const location = { lat: 37.5665, lng: 126.9780 }; // 서울 위치 예시
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initMap();
  });
  