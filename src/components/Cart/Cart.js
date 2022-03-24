import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const { cart } = props; 

    let quantity = 0;
    let total = 0;
    let shipping = 0;
    
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }

    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = parseFloat(tax) + total + shipping;

    return (
        <div className="cart">
            <h3 className="tet-center d-block ms-3">Order Summary</h3>
            <div className="cart-details mt-4">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
        </div>
    );
};

export default Cart;