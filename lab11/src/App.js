import React from 'react';
import pizza from './img/pizza.jpg';
import PizzaCard from './components/PizzaCard';
import './App.css'

function App() {
  return (
    <div className="App">
      <PizzaCard title="Diablo" text='Острые колбаски чоризо, острый перец халапеньо, соус барбекю, митболы из говядины, томаты, сладкий перец, красный лук, моцарелла, фирменный томатный соус' img={pizza} price='от 400 руб.'/>
    </div>
  );
}

export default App;