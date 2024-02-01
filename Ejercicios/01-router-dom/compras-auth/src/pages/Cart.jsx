import React, { useContext } from 'react';
import { ComponentContext } from '../components/useContext/context/ComponentContext';


const Cart = () => {
  const { cart, setCart } = useContext(ComponentContext);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  }

  const handleCheckout = () => {
 
    alert('Compra realizada con éxito!');
    setCart([]);
  }

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={() => handleRemoveFromCart(product.id)}>
            Eliminar del carrito
          </button>
        </div>
      ))}
      {cart.length > 0 && (
        <button onClick={handleCheckout}>
          Realizar la compra
        </button>
      )}
    </div>
  );
}

export default Cart;
