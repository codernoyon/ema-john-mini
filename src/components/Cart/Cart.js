import { faArrowRight, faTrashAlt,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cart.css"

const Cart = ({cart, handleClearCart}) => {


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

    const navigate = useNavigate();

    const goReview = () => {
        const path = "/order";
        navigate(path)
    }

    return (
        <div className="cart pb-2">
            <h3 className="tet-center d-block ms-3">Order Summary</h3>
            <div className="cart-details my-5">
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            </div>
            <button onClick={handleClearCart} className='clear-cart-btn d-block w-100 mb-3'>
                Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            <button onClick={goReview} className='review-order-btn d-block w-100'>
                Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Cart;