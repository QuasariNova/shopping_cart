import axios from "axios";

export const getCart = async () => {
  const { data } = await axios.get("/api/cart");
  return data;
};

export const addToCart = async (productId) => {
  const { data } = await axios.post("/api/add-to-cart", { productId });
  return data;
};

export const checkout = async () => {
  await axios.post("/api/checkout");
};
