import CartItem from "./cartItem.jsx";

const Cart = ({ cartItems, onCheckout }) => {
  const calculateTotal = () => {
    return cartItems.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length == 0 ? (
        <>
          <p>Your cart is empty</p>
          <p>Total: $0</p>
        </>
      ) : (
        <table className="cart-items">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="total">
                Total: ${calculateTotal().toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
      <button
        className="checkout"
        disabled={cartItems.length === 0}
        onClick={onCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
