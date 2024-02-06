import { useState } from "react";
import EditForm from "./editForm.jsx";

const Product = ({ title, price, quantity }) => {
  const [editVisible, setEditVisible] = useState(false);

  return (
    <li className="product">
      <div className="product-details">
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button
            className="edit"
            onClick={() => setEditVisible((prev) => !prev)}
          >
            Edit
          </button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>

      {editVisible && <EditForm />}
    </li>
  );
};

export default Product;
