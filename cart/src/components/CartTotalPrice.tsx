import React from "react";

interface CartTotalPrice {
  items: Item[];
}

interface Item {
  quantity: number;
  price: number;
}

const CartTotalPrice: React.FC<CartTotalPrice> = ({ items }) => {
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div>
      <h2>Total price:</h2>
      <p>Total Items: {items.length}</p>
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};

export default CartTotalPrice;
