import React from 'react';
import './index.scss';

class ProductsList extends React.Component {
  render() {
    const total = this.props.cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
      <div className="products">
        <ul className="products__list">
          {this.props.cartItems.map(({ id, name, price }) => (
            <li className="products__list-item" key={id}>
              <span className="products__item-name">{name}</span>
              <span className="products__item-price">{`$${price}`}</span>
            </li>
          ))}
        </ul>
        <div className="products__total">{`Total $${total}`}</div>
      </div>
    );
  }
}

export default ProductsList;
