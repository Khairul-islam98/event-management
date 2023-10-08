import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TeamMember = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeams(data.people))
    }, [])
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/8 py-5 ml-6 mr-6'>
                {teams.map(team => <div key={team.id} class="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <img className='h-96 w-full' src={team.img} alt="profile-picture" />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {team.name}
                        </h4>
                    </div>
                    <div className='mx-auto'>
                    <Link to={`/team/${team.id}`}>
                        <button
                            className="flex select-none justify-center  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Details
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </Link>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default TeamMember;