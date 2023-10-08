import React from "react";
import banner from '../../assets/images/banner1.jpeg'
import { Link } from "react-router-dom";

const Gallery = () => {
    const images = [
        "https://i.ibb.co/TYQsQNY/images.jpg",
        "https://i.ibb.co/G03cm69/1526540572-6-EL4a-P-Front-hoofd-470.jpg",
        "https://i.ibb.co/nr6x5Tw/TLA-WEBDESIGN-EVENTS-BANNER.jpg",
        "https://i.ibb.co/BwLKNmC/alexandre-pellaes-6v-Ajp0psc-X0-unsplash-1-1.jpg",
        "https://i.ibb.co/87r3jh4/3665701-1611761083.jpg",
        "https://i.ibb.co/z63dnM0/SHWAOVU65-FD2-BBKMGK5-OB673-Y4.jpg",
        "https://i.ibb.co/pXMCqH5/screens-feature10-1.jpg",
        "https://i.ibb.co/Trd5nd4/download.jpg",
        "https://i.ibb.co/SNg4sdf/A1-ESPORTS-1-article-Large.webp",
        "https://i.ibb.co/cQfKyS3/DSC-3028-Medium.jpg",
        "https://i.ibb.co/sqX9Rck/Copy-of-800-x-500-Blog-Post-3-1.webp",
        "https://i.ibb.co/cD80RtN/event-tech-main-Adobe-Stock-352613171.webp",
        "https://i.ibb.co/MhNNr5J/pexels-teddy-yang-2263436-1320x690.webp",
        "https://i.ibb.co/Z8d1YwS/images.jpg",
        "https://i.ibb.co/ccsS9Nm/2020-is-poised-to-be-a-busy-year-for-techpreneurs-and-tech-geeks-everywhere.jpg",
        "https://i.ibb.co/WBV5TTv/event-tech.webp",
    ];

    return (
        <div>
            <div>
                <div className="hero min-h-[400px]" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <p className="mb-5 font-extrabold text-3xl">Gallery</p>
                            <Link to='/'>
                                <button className="btn bg-pink-500 text-white">HOME</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    {images.map((imageUrl, index) => (
                        <div key={index} className="bg-gray-200 p-4">
                            <img src={imageUrl} alt={`Image ${index}`} className="w-full" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;























