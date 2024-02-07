import { useState } from "react";

const EditForm = ({ product, onEditItem, onCancel }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const handleEditItem = (e) => {
    e.preventDefault();
    const edited = { title, price, quantity };
    onEditItem(product._id, edited, onCancel);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form onSubmit={handleEditItem}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-label="Product Price"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            aria-label="Product Quantity"
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
