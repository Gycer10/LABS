document.getElementById('orderForm').addEventListener('submit', function(event) {
    var form = event.target;

    var name = form.name.value;
    if (!/^[А-Яа-яЁё\s]+$/.test(name)) {
        alert('Имя должно содержать только русские буквы.');
        event.preventDefault();
        return;
    }

    var phone = form.phone.value;
    if (!/^\d+$/.test(phone)) {
        alert('Номер телефона должен содержать только цифры.');
        event.preventDefault();
        return;
    }

    var street = form.street.value;
    if (!/^[А-Яа-яЁё0-9\s.,-]+$/.test(street)) {
        alert('Улица должна содержать только русские буквы, спец. символы и цифры.');
        event.preventDefault();
        return;
    }

    var city = form.city.value;
    if (!/^[А-Яа-яЁё\s]+$/.test(city)) {
        alert('Город должен содержать только русские буквы.');
        event.preventDefault();
        return;
    }

    var region = form.region.value;
    if (!/^[А-Яа-яЁё\s]+$/.test(region)) {
        alert('Регион должен содержать только русские буквы.');
        event.preventDefault();
        return;
    }

    var postcode = form.postcode.value;
    if (!/^\d+$/.test(postcode)) {
        alert('Индекс должен содержать только цифры.');
        event.preventDefault();
        return;
    }

    var house = form.house.value;
    if (!/^[А-Яа-яЁёA-Za-z0-9\s.,/-]+$/.test(house)) {
        alert('Номер дома должен содержать только цифры, английские или русские буквы, спец. символы.');
        event.preventDefault();
        return;
    }

    var modal = document.getElementById("modal");
    modal.style.display = "block";
    event.preventDefault();
});

document.getElementsByClassName("close")[0].onclick = function() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}