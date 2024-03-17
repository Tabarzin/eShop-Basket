import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { getCartData } from "../utils/api";
import CartTotalPrice from "./CartTotalPrice";
import { Row, Col } from "antd";

interface Item {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
}

const CartList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCartData();

        setItems(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = (id: number, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <Row gutter={[48, 16]}>
      <Col span={12}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            image={item.thumbnail}
            title={item.title}
            description={item.description}
            quantity={item.quantity}
            price={item.price}
            onQuantityChange={(quantity: number) =>
              handleQuantityChange(item.id, quantity)
            }
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </Col>
      <Col span={12}>
        <CartTotalPrice items={items} />
      </Col>
    </Row>
  );
};

export default CartList;
