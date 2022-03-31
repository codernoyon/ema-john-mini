import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewCart = (props) => {
    // const { cart } = props;

    // let quantity = 0;
    // let total = 0;
    // let shipping = 0;
    
    // for (const product of cart) {
    //     quantity = quantity + product?.quantity;
    //     total = total + product?.price * product.quantity;
    //     shipping = shipping + product?.shipping * product.quantity;
    // }

    // const tax = (total * 10 / 100).toFixed(2);
    // const grandTotal = parseFloat(tax) + total + shipping;


    const navigate = useNavigate();
    const goCheckout = () => {
        const path = "/inventory";
        navigate(path)
    }

    return (
        <div className="">
            <h3 className="tet-center d-block ms-3">Order Summary</h3>
            <div className="cart-details my-5">
                <p>Selected Items: </p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: </p>
                <h5>Grand Total: </h5>
            </div>
            <button className='clear-cart-btn d-block w-100 mb-3'>
                Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
            </button>
            <button onClick={goCheckout} className='review-order-btn d-block w-100'>
                Proceed Checkout <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default ReviewCart;