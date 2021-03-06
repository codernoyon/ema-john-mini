import React from 'react';
import OrderProduct from '../OrderProduct/OrderProduct';
import ReviewCart from '../ReviewCart/ReviewCart';
import "./Order.css";
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import PageTitle from '../PageTitle/PageTitle';

const Order = () => {
    const [products, ] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    } 


    return (
        <section className="order-section py-3">
            <PageTitle title={"Order Review"}></PageTitle>
            <div className="container">
                <div className="row justify-content-between align-items-center px-2 ">
                    <div className="col-lg-7 order-products ps-1 pe-2 mb-3">
                        {
                            cart.map(product => <OrderProduct
                                key={product._id}
                                product={product}
                                handleRemoveProduct={handleRemoveProduct}
                            
                            ></OrderProduct>)
                        }
                    </div>
                    <div className="col-lg-4 review-cart-container px-3 py-3">
                        <ReviewCart
                            cart={cart}
                            handleClearCart={handleClearCart}
                        ></ReviewCart>
                        {/* <h3>{cart.length}</h3> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;