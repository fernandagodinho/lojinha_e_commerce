// Cart.tsx
import React from 'react';
import { CartItem } from './types';

interface CartProps {
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.price} x {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
