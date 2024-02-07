import { useState } from "react";
import EditForm from "./editForm.jsx";

const Product = ({ product, onEditItem, onDeleteItem }) => {
  const [editVisible, setEditVisible] = useState(false);

  const handleDeleteItem = () => {
    onDeleteItem(product._id);
  };

  return (
    <li className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button
            className="edit"
            onClick={() => setEditVisible((prev) => !prev)}
          >
            Edit
          </button>
        </div>
        <button className="delete-button" onClick={handleDeleteItem}>
          <span>X</span>
        </button>
      </div>

      {editVisible && (
        <EditForm
          product={product}
          onCancel={() => setEditVisible(false)}
          onEditItem={onEditItem}
        />
      )}
    </li>
  );
};

export default Product;
