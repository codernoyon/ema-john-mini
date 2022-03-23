import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart-container">
            <h3 className="tet-center d-block ms-3">Order Summary</h3>
            <div className="cart-details mt-4">
                <h5>Selected Items: {cart.length}</h5>
                <h5>Total Price: $</h5>
                <h5>Total Shipping Charge: $</h5>
                <h5>Tax: $</h5>
                <h5>Grand Total: $</h5>
            </div>
        </div>
    );
};

export default Cart;