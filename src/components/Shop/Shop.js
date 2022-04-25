import React, {useState, useEffect} from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {
    const [products,] = useProducts();
    const [cart, setCart] = useCart(products);
    const [pagesCount, setPagesCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/productsCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPagesCount(pages);
        })
    }, [])


    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        const exists = cart.find((product) => product._id === selectedProduct._id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        } else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];

        }
        setCart(newCart);
        addToDb(selectedProduct._id);

    };

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    return (
        <div className="shop">
            <div className="container">
                <div className="row px-3 px-md-0">
                    <div className="col-lg-9">
                        <div className="proudct-container row py-5 g-3">
                            {
                                products.map(product => <Product
                                    key={product._id}
                                    product={product}
                                    handleAddToCart={handleAddToCart}


                                ></Product>)
                            }
                        </div>
                        <div className='py-3 d-flex w-100 align-items-center justify-content-center'>
                        {
                            [...Array(pagesCount).keys()]
                            .map(number => <button className='mx-1 py-1 px-4 btn btn-warning'>{number + 1}</button>)
                        } 
                        </div>
                    </div>
                    <div className="col-lg-3 pt-2 cart-container order-first order-lg-last mt-5 rounded-1">
                        <Cart
                            cart={cart}
                            handleClearCart={handleClearCart}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;