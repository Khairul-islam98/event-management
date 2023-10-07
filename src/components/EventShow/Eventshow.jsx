import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Eventshow = () => {
    const [eventShow, setEventShow] = useState([])
    useEffect(() => {
        fetch('eventshow.json')
        .then(res => res.json())
        .then(data => setEventShow(data))
    },[])

    return (
        <div className=''>
            <Marquee pauseOnHover={true}  speed={120}>
                {
                    eventShow.map(event =>  <img className='w-80 h-60 border' key={event.id} src={event.img} />)
                }
            </Marquee>
        </div>
    );
};

export default Eventshow;