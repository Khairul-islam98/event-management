import React from 'react';
import { Link } from 'react-router-dom';
import Eventshow from '../../components/EventShow/Eventshow';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div>
                
            </div>
            <Eventshow></Eventshow>
        </div>
    );
};

export default Home;