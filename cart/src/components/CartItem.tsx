import React from "react";
import { Card, Button } from "antd";
import Icon from "@ant-design/icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

interface CartItemProps {
  image: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  onQuantityChange: (quantity: number) => void;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  title,
  description,
  quantity,
  price,
  onQuantityChange,
  onDelete,
}) => {
  const handleIncrease = () => {
    if (quantity < 10) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={title} src={image} />}
    >
      <Card.Meta title={title} description={description} />
      <p>Quantity: {quantity}</p>
      <Button.Group>
        <Button onClick={handleDecrease} icon={<MinusOutlined />} />

        <Button onClick={handleIncrease} icon={<PlusOutlined />} />
      </Button.Group>
      <p>Price: {price}</p>
      <Button onClick={onDelete} icon={<Icon type="delete" />}>
        Delete
      </Button>
    </Card>
  );
};

export default CartItem;
