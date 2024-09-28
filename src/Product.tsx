// Product.tsx
import React from 'react';
import { Product as ProductType } from './types';

interface ProductProps {
  product: ProductType;
  addToCart: (product: ProductType) => void;
}

const Product: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Product;
