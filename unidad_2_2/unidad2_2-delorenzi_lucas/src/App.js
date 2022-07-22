import { useState } from 'react';
import './App.css';
import ShowValues from './Components/ShowValues';

const App = () => {
  const [array, setArray] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const btnHandler = () => {
    if (inputValue) {
      setArray([...array, inputValue]);
      setInputValue('');
    }
  }

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="App">
      <div className='app-input-container'>
        <label>Ingrese un valor</label>
        <input className="app-input" type="text" value={inputValue} onChange={inputHandler}></input>
      </div>
      <button onClick={btnHandler}>AGREGAR</button>
      <ShowValues array={array} setArray={setArray} />
    </div >
  );
}

export default App;
