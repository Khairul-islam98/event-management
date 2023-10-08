import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Eventshow from '../../components/EventShow/Eventshow';
import Banner from '../../components/Banner/Banner';
import Services from '../../components/Services/Services';
import TeamMember from '../../components/TeamMember/TeamMember';
import Ticket from '../../components/Ticket/Ticket';


const Home = () => {
    const servicesData = useLoaderData()

    return (
        <div className=''>
            <Banner></Banner>
            <div data-aos="fade-up"
                data-aos-duration="3000">
                <h1 className='text-center font-extrabold text-3xl py-10'>Services</h1>
                <div className='flex justify-center text-pink-500'>
                    <svg class="animate-bounce w-6 h-6 ...">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </svg>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/8 py-5 ml-6 mr-6'>
                    {servicesData.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </div>
            </div>
            <div data-aos="fade-up"
                data-aos-duration="4000">
                <h1 className='text-center  font-extrabold text-3xl py-10'>Our Team Member</h1>
                <div className='flex justify-center text-pink-500'>
                    <svg class="animate-bounce w-6 h-6 ...">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </svg>
                </div>
                <div>
                    <TeamMember></TeamMember>
                </div>
                <div>
                    <Ticket></Ticket>
                </div>
            </div>
            <Eventshow></Eventshow>
        </div>
    );
};

export default Home;