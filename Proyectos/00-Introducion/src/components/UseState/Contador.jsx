import { useState } from "react";
// El decrementar sea un valor que le pase como parametro

const initialState = 0;
let valor = 0;
function Contador() {
//declaramos los hooks
const [count, setCount] = useState(initialState);

function handleIncrement() {
  setCount(count + 1);
  //Asi es como se deberia de hacer para asegurarnos traer siempre el ultimo valor de la variable estado
 // setCount(prevCount => prevCounter + 1)
}
function handleDecrement(valor){
    setCount(count - valor);
}


return (
    <>
    <h1>EJemplo de contador en React</h1>
    <h2>El contador vale: {count}</h2>
    <p>Valor input {valor}</p>
  
    <button onClick={handleIncrement}>
    Incrementar contador
  </button>
  <button onClick={() =>handleDecrement(5)}>Decrementar el contador</button>
    </>
);
}

export default Contador