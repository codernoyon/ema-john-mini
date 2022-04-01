import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./OrderProduct.css";

const OrderProduct = ({ product }) => {
    const { img, name, price, quantity, shipping } = product;

    console.log(product);
    return (
        <div className='d-flex order-product'>
            <div className='order-product-img p-1'>
                <img className='w-100' src={img} alt=""/>
            </div>
            <div className="order-product-details align-items-center d-flex ps-2 pe-3 justify-content-between w-100 ">
                <div className="info">
                    <h6>{name.lenght > 20 ? name.slice(0, 20) + "..." : name}</h6>
                    <p className='mb-0'>Price: $<span className='highlight'>{price}</span></p>
                    <p className='mb-0'>Quantity <span className='highlight'>{quantity}</span></p>
                    <small className='mb-0'>Shipping Charge: $<span className='highlight'>{shipping}</span></small>
                </div>
                <button className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderProduct;