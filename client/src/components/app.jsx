import AddForm from "./addForm.jsx";
import Header from "./header.jsx";
import ProductListing from "./productListing.jsx";

import { useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
} from "../services/products.js";
import { addToCart, checkout, getCart } from "../services/cart.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleGetProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };

    const handleGetCart = async () => {
      try {
        const data = await getCart();
        setCartItems(data);
      } catch (e) {
        console.error(e);
      }
    };

    handleGetProducts();
    handleGetCart();
  }, []);

  const handleAddItem = async (newItem, callback) => {
    try {
      const data = await addProduct(newItem);
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
      const data = await editProduct(id, edited);
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
      await deleteProduct(id);
      setProducts(products.filter((product) => product._id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddToCart = async (id) => {
    try {
      const resp = await addToCart(id);
      setCartItems((previous) => {
        if (previous.find((item) => item.productId === id)) {
          return previous.map((item) => {
            if (item.productId === id) {
              return resp.item;
            }
            return item;
          });
        }
        return previous.concat(resp.item);
      });

      setProducts((previous) =>
        previous.map((item) => {
          if (item._id === id) {
            return resp.product;
          }
          return item;
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkout();
      setCartItems([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Header cartItems={cartItems} onCheckout={handleCheckout} />

      <main>
        <ProductListing
          products={products}
          onEditItem={handleEditItem}
          onDeleteItem={handleDeleteItem}
          onAddToCart={handleAddToCart}
        />

        <AddForm onAddItem={handleAddItem} />
      </main>
    </>
  );
};

export default App;
