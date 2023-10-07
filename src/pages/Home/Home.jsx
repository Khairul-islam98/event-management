import React from 'react';
import { Link } from 'react-router-dom';
import Eventshow from '../../components/EventShow/Eventshow';

const Home = () => {
    return (
        <div className=''>
            <Link to='login'>login</Link>
            <br></br>
            <Link to='register'>register</Link>
            <h1 className="text-3xl text-center border font-bold text-gray-800 underline">
                Hello world
            </h1>
            <Eventshow></Eventshow>
        </div>
    );
};

export default Home;