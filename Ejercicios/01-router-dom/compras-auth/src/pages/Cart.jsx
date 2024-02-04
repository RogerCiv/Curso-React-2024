import React, { useContext } from 'react';
import { ComponentContext } from '../components/useContext/context/ComponentContext';
import ProductCard from '../components/ProductCard';


const Cart = () => {
  const { cart, setCart } = useContext(ComponentContext);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  }

  const handleCheckout = () => {

    const total = cart.reduce((acc, product) => acc + product.price, 0);
    alert(`Total a pagar: $${total}`);	
    setCart([]);

  }

  return (
    <>
      <div className='h-[1000px]'>

        <h1>Carrito de Compras</h1>
        {
          cart.length > 0 && (

            <button className='inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 w-1/6  ' onClick={handleCheckout}>
              Realizar la compra
            </button>
          )
        }
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-2'>
          {
            cart.map(product => (
              <ProductCard key={product.id} product={product} removeFromCart={handleRemoveFromCart} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart;
