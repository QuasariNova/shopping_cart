import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const addProduct = async (newItem) => {
  const { data } = await axios.post("/api/products", newItem);
  return data;
};

export const editProduct = async (id, edited) => {
  const { data } = await axios.put(`/api/products/${id}`, edited);
  return data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`/api/products/${id}`);
};
