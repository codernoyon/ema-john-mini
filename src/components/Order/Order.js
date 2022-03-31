import React from 'react';
import OrderProduct from '../OrderProduct/OrderProduct';
import ReviewCart from '../ReviewCart/ReviewCart';
import "./Order.css";

const Order = () => {
    return (
        <section className="order-section py-3">
            <div className="container">
                <div className="row justify-content-between align-items-center px-3 ">
                    <div className="col-lg-7 order-products ps-1 pe-2 mb-3">
                        <OrderProduct></OrderProduct>
                        <OrderProduct></OrderProduct>
                        <OrderProduct></OrderProduct>
                        <OrderProduct></OrderProduct>
                        <OrderProduct></OrderProduct>
                    </div>
                    <div className="col-lg-4 review-cart-container px-3 py-3">
                        <ReviewCart></ReviewCart>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;