import React, { useState, useEffect } from 'react';
import { fetchproducts } from '../../services/productsService';
import AffProducts from './affProducts';

const ListProducts = () => {
  const [products, setProducts] = useState("");

  useEffect(() => {
     fetchproducts()  
      .then((res) => {
        const data = res.data;
        setProducts(data);
        })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <AffProducts products={products} />
    </>
  );
};

export default ListProducts;