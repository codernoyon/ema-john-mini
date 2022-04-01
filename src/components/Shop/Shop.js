import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        const exists = cart.find((product) => product.id === selectedProduct.id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
            
        }
        setCart(newCart);
        addToDb(selectedProduct.id);

    };
    
    return (
        <div className="shop">
            <div className="container">
                <div className="row px-3 px-md-0">
                    <div className="col-lg-9">
                        <div className="proudct-container row py-5 g-3">
                            {
                                products.map(product => <Product
                                    key={product.id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}
                                    
                                ></Product>)
                            }
                        </div>
                    </div>
                    <div className="col-lg-3 pt-2 cart-container order-first order-lg-last mt-5 rounded-1">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;