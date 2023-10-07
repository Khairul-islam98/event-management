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
            <Marquee pauseOnHover={true} direction='right'  speed={100}>
                {
                    eventShow.map(event =>  <img className='w-50 h-40 border  rounded-lg mr-2' key={event.id} src={event.img} />)
                }
            </Marquee>
        </div>
    );
};

export default Eventshow;