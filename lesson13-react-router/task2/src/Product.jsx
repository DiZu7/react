import React from 'react';
import './index.scss';

const Product = ({ match }) => {
  return <div className="product">{match.params.productId}</div>;
};

export default Product;
