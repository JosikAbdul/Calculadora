import './App.css';
import logoJosik from './imagenes/2FrontJosik.png';
import Boton from './components/Boton';
import Pantalla from './components/pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs';


function App() {

  const [input, setInput]= useState('');
  const agregarInput = val => {
setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      if (/^[0-9+\-*/.]+$/.test(input)) {
        try {
          setInput(evaluate(input));
        } catch (error) {
          alert("Error al evaluar la expresión.");
        }
      } else {
        alert("La entrada no es una expresión matemática válida.");
      }
    } else {
      alert("Ingrese un valor válido para realizar cálculos.");
    }
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        src={logoJosik}
        className='logoJosik'
        alt='Logo Josik' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>

        <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Limpiar
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
