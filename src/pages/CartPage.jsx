import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart, updateQuantity, calculateTotal }) {
  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/shop">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button 
                  className="remove-button" 
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="cart-total">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
            <Link to="/shop">
              <button className="continue-shopping">Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;