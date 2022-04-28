import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

const Home = () => {
    return (
        <section className=''>
            <PageTitle title={"Home"}></PageTitle>
            <div className="container mt-5">
                <div className="row align-items-center justify-content-between vh-100 px-2 px-md-0">
                    <div className="col-md-6 my-4">
                        <div>
                            <span className='text-warning'>Sale up to 70% off</span>
                            <h1>New Collection For Fall</h1>
                            <p>Discover all the new arrivals of ready-to-wear collection.</p>
                            <button className="btn btn-warning">SHOP NOW</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                        <img className='w-100' src="https://i.ibb.co/m6Gs2xY/banner-man.jpg" alt="banner-man" border="0"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;