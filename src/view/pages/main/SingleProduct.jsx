import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/api/products/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data.product));
  }, []);
  console.log(product);
  return (
    <div>
      {product.model}
    </div>
  );
};

export default SingleProduct;