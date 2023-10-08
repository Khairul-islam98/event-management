import React from 'react';
import bannerImg from '../../assets/images/banner-event.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content" data-aos="fade-up"
                data-aos-duration="3000">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 font-extrabold text-3xl">Tech and Gaming Events</p>
                    <Link to='/contactus'>
                        <button className="btn bg-pink-500 text-white">Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;