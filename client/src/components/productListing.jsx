import Product from "./product.jsx";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
