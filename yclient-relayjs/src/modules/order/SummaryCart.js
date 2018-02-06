import React from "react";

export default function SummaryCart({ products }) {
  return (
    <figure>
      <h5>Cart Items</h5>
      <hr />
      {products.map(product => {
        const { id, name, price, quantity } = product;
        return (
          <div className="row" key={id}>
            <div className="col-md-8">
              <div>
                {quantity} x <b>{name}</b>
              </div>
            </div>
            <div className="col-md-4">{price * quantity} đ</div>
          </div>
        );
      })}
      <hr />
      <div className="row">
        <div className="col-md-8">Total</div>
        <div className="col-md-4">{getTotalPrice(products)} đ</div>
      </div>
    </figure>
  );
}

function getTotalPrice(products) {
  return products
    .map(p => p.price * p.quantity)
    .reduce((acc, val) => acc + val, 0);
}
