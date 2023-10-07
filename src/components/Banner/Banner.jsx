import React from 'react';
import bannerImg from '../../assets/images/banner-event.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 font-extrabold text-3xl">Tech and Gaming Events</p>
                    <button className="btn bg-pink-500 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;