import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Eventshow from '../../components/EventShow/Eventshow';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';

const Home = () => {
    const servicesData = useLoaderData()
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                <h1 className='text-center  font-extrabold text-3xl py-10'>Services</h1>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/8 py-5 ml-6 mr-6'>
                    {servicesData.map(service => <Services key={service} service={service}></Services>)
                    }
                </div>
            </div>
            <Eventshow></Eventshow>
        </div>
    );
};

export default Home;