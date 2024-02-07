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
    console.log(newItem);
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

  return (
    <>
      <Header />

      <main>
        <ProductListing products={products} />

        <AddForm onSubmit={handleAddItem} />
      </main>
    </>
  );
};

export default App;
