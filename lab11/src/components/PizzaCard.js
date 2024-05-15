import React, { useState } from 'react';

function PizzaCard(props) {
  const [quantity, setQuantity] = useState(1);

  const ReducingTheNumberOf = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const IncreasingTheNumberOf = () => {
    setQuantity(quantity + 1);
  };

  const displayAlert = () => {
    alert(`Вы заказали ${quantity}!`);
  };

  return (
    <div className="block">
      <div className="image">
        <img src={props.img} />
      </div>
      <form>
        <label for="diameter">Диаметр:</label>
        <select className="diam" name="diam" id="diam">
            <option value="1">15 см</option>
            <option value="2">22 см</option>
            <option value="3">30 см</option>
        </select>
        </form>
      <div className="class">
        <div className="title">{props.title}</div>
        <div className="information">{props.text}</div>
        <div className="price">{props.price}</div>
      </div>
      <div className="select">
        <button onClick={ReducingTheNumberOf}>-</button>
        <span>{quantity}</span>
        <button onClick={IncreasingTheNumberOf}>+</button>
        <button className="order-button" onClick={displayAlert}>
          Заказ
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;