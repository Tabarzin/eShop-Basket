export const getCartData = async () => {
  const response = await fetch("https://dummyjson.com/carts/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
