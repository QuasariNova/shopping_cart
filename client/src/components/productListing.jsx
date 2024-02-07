import Product from "./product.jsx";

const ProductListing = ({ products, onEditItem, onDeleteItem }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            onEditItem={onEditItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
