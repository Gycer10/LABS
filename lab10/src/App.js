import f3 from './img/f3.png';
import f4 from './img/f4.png';
import f5 from './img/f5.png';
import ToDo from './components/ToDo';
import './App.css';

function App() {
  return (
      <div className="container">
          <h2 className="title">Что вам нужно?</h2>
          <div className="main_block">
              <ToDo title="Первый блок" img={f3} text='Тут могла быть ваша реклама'/>
              <ToDo title="Второй блок" img={f4} text='Тут могла быть ваша реклама'/>
              <ToDo title="Третий блок" img={f5} text='Тут могла быть ваша реклама'/>
          </div>
      </div>
  );
}

export default App;