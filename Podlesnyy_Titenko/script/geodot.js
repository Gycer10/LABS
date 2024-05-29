document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([56.837312, 60.656781], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([56.837312, 60.656781]).addTo(map)
        .bindPopup('Наш магазин находится здесь.<br> Адрес: Улица Коминтерна, 5.')
        .openPopup();
});