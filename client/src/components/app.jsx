import axios from "axios";

import AddForm from "./addForm.jsx";
import Header from "./header.jsx";
import ProductListing from "./productListing.jsx";

// import productData from "../mockData/data.js";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    handleProducts();
  }, []);

  const handleAddItem = async (newItem, callback) => {
    try {
      const { data } = await axios.post("/api/products", newItem);
      setProducts(products.concat(data));

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleEditItem = async (id, edited, callback) => {
    try {
      const { data } = await axios.put(`/api/products/${id}`, edited);
      setProducts(
        products.map((product) => {
          if (product._id === id) {
            return data;
          }
          return product;
        }),
      );

      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header />

      <main>
        <ProductListing
          products={products}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
        />

        <AddForm onAddItem={handleAddItem} />
      </main>
    </>
  );
};

export default App;
