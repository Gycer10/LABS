document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const nameRegex = /^[А-ЯЁа-яё]+$/;
    if (!nameRegex.test(name)) {
        alert('Пожалуйста, используйте только буквы Русского алфавита в поле "Имя".');
        return;
    }

    document.getElementById('thankYouMessage').style.display = 'block';

    document.getElementById('reviewForm').reset();
});