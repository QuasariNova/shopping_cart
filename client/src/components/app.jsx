import AddForm from "./addForm.jsx";
import Header from "./header.jsx";
import ProductListing from "./productListing.jsx";

import productData from "../mockData/data.js";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <>
      <Header />

      <main>
        <ProductListing products={products} />

        <AddForm />
      </main>
    </>
  );
};

export default App;
