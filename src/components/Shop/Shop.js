import React, { useState, useEffect } from 'react';
import useCart from '../../hooks/useCart';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import PageTitle from '../PageTitle/PageTitle';
import Product from '../Product/Product';
import "./Shop.css";
import Loading from '../Loading/Loading'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);
    const [pagesCount, setPagesCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data));
        setLoading(true);
    }, [page, size]);


    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPagesCount(pages);
            })
    }, []);

    console.log(page);


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

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className="shop">
            <PageTitle title={"Shop"}></PageTitle>
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
                        <div className="d-flex bg-danger align-items-center justify-content-center px-4 ">
                            <div className='py-3 d-flex w-100 align-items-center justify-content-center'>
                                {
                                    [...Array(pagesCount).keys()]
                                        .map(number => <button
                                            onClick={() => setPage(number)}
                                            key={number}
                                            className={page === number ? 'selected' : 'paginate-btn'}>{number}</button>)
                                }
                            </div>
                            <div className='w-25'>
                                <select onChange={(e) => setSize(e.target.value)} className='w-100'>
                                    <option value="5">5</option>
                                    <option selected value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
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