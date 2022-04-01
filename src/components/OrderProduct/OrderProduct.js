import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./OrderProduct.css";

const OrderProduct = () => {
    return (
        <div className='d-flex order-product'>
            <div className='order-product-img p-1'>
                <img className='w-100' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg" alt=""/>
            </div>
            <div className="order-product-details align-items-center d-flex ps-2 pe-3 justify-content-between w-100 ">
                <div className="info">
                    <h6>LITE RACER ADAPT 3...</h6>
                    <p className='mb-0'>Price: $<span className='highlight'>200</span></p>
                    <p className='mb-0'>Quantity <span className='highlight'>1</span></p>
                    <small className='mb-0'>Shipping Charge: $<span className='highlight'>5</span></small>
                </div>
                <button className='delete-btn'>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderProduct;