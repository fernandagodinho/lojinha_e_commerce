// ProductList.tsx
import React from 'react';
import Product from './Product';
import { Product as ProductType } from './types';

interface ProductListProps {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
