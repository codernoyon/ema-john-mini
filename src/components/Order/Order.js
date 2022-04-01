import React from 'react';
import OrderProduct from '../OrderProduct/OrderProduct';
import ReviewCart from '../ReviewCart/ReviewCart';
import "./Order.css";
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';

const Order = () => {
    const [products, ] = useProducts();
    const [cart, ] = useCart(products);
    return (
        <section className="order-section py-3">
            <div className="container">
                <div className="row justify-content-between align-items-center px-2 ">
                    <div className="col-lg-7 order-products ps-1 pe-2 mb-3">
                        {
                            cart.map(product => <OrderProduct
                                key={product.id}
                                product={product}
                            
                            ></OrderProduct>)
                        }
                    </div>
                    <div className="col-lg-4 review-cart-container px-3 py-3">
                        <ReviewCart cart={cart}></ReviewCart>
                        {/* <h3>{cart.length}</h3> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;