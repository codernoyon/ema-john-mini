import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import "./Inventory.css";

const Inventory = () => {
    return (
        <section className='inventory-section'>
            <PageTitle title={"Mange Inventory"}></PageTitle>
            <div className="container">
                <h1 className='text-center'>Your order is Done!!</h1>
            </div>
        </section>
    );
};

export default Inventory;