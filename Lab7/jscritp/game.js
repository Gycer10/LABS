// Создаём функцию для генерации случайного числа от 1 до 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Создаём переменную для хранения загаданного числа
let secretNumber = generateRandomNumber();

// Функция для угадывания числа
function guessNumber() {
  let guess = prompt("Угадайте число от 1 до 10:");
  guess = Number(guess);


  if (guess < secretNumber ) {
    alert("Число должно быть больше!");
    guessNumber()

  } else if (guess > secretNumber) {
    alert("Число должно быть меньше!");
    guessNumber()
  } else {
    alert("Вы угадали число! Вы молодец!");
    // Перезапускаем игру
    window.location.reload();
   
  }

}

// Цикл для попыток угадывания
// for (let i = 1; i <= 5; i++) {
//   guessNumber();
// }

// Если все попытки исчерпаны, предлагаем сыграть ещё раз
if (i > 5) {
  confirm("Все попытки исчерпаны. Сыграем ещё раз?");
}
