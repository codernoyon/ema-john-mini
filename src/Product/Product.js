import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { handleAddToCart, product } = props;
    const { name, price, img, seller, ratings } = product;
    
    return (
        <div className='col-md-4'>
            <div className="product">
                <div className="product-image">
                    <img className='w-100' src={img} alt="" />
                </div>
                <div className="product-details">
                    <h5>{name.slice(0, 18) + "..."}</h5>
                    <p>Price: ${price}</p>
                    <div className="d-flex flex-column pb-2">
                        <small>Manufacturer: {seller}</small>
                        <small>Rating: {ratings} star</small>
                    </div>
                </div>
                <button onClick={()=> handleAddToCart(product)} className="d-block custom-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;