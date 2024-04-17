const orderForm = document.getElementById('order-form');
const productInput = document.getElementById('product');
const quantityInput = document.getElementById('quantity');

  function validateProductForm() {
    var quantity = document.getElementById("quantity").value;
    if (quantity <= 0) {
      alert("Некорректное количество продукта или услуги!");
      return false;
    }
    return true;
  }

  function validateCallBackForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if (name.trim() === "") {
      alert("Пожалуйста, введите ваше имя!");

orderForm.addEventListener('submit', function(event) {
  if (productInput.value === '' || quantityInput.value === '') {
    event.preventDefault();
    alert('Пожалуйста, заполните все поля формы заказа продукта или услуги!');
  }
});
    }
// Изменение стилей элементов на странице
document.getElementById('product').style.color = 'red';
document.getElementById('comments').style.display = 'none';
  }
