import { useState } from "react";

const AddForm = ({ onAddItem }) => {
  const [visible, setVisible] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const handleClearForm = () => {
    setVisible(false);
    setProductName("");
    setProductPrice(0);
    setProductQuantity(0);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const newProduct = {
      title: productName,
      price: productPrice,
      quantity: productQuantity,
    };
    onAddItem(newProduct, handleClearForm);
  };

  return (
    <div className={visible ? "add-form visible" : "add-form"}>
      <p>
        <button className="add-product-button" onClick={() => setVisible(true)}>
          Add A Product
        </button>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleAddItem}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={handleClearForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
