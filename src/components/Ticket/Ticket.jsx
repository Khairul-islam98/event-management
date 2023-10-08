import React from 'react';

const Ticket = () => {
    return (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-3/4  mx-auto py-5 mt-5'>
            <div class="relative  max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                        Silver
                    </p>
                    <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                        <span class="mt-2 text-4xl">$</span>150
                    </h1>
                </div>
                <div class="p-0">
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                6 team members
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                200+ components
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                40+ built-in pages
                            </p>
                        </li>
                        
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Workshops and Engage
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="mt-12 p-0">
                    <button
                        class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
            <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                        Gold
                    </p>
                    <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                        <span class="mt-2 text-4xl">$</span>250
                    </h1>
                </div>
                <div class="p-0">
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                6 team members
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                200+ components
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                40+ built-in pages
                            </p>
                        </li>
                        
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Workshops and Engage
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="mt-12 p-0">
                    <button
                        class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
            <div class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                <div class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
                    <p class="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
                        Platinum
                    </p>
                    <h1 class="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
                        <span class="mt-2 text-4xl">$</span>400
                    </h1>
                </div>
                <div class="p-0">
                    <ul class="flex flex-col gap-4">
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                6 team members
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                200+ components
                            </p>
                        </li>
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                40+ built-in pages
                            </p>
                        </li>
                        
                        <li class="flex items-center gap-4">
                            <span class="rounded-full border border-white/20 bg-white/20 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="h-3 w-3"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M4.5 12.75l6 6 9-13.5"
                                    ></path>
                                </svg>
                            </span>
                            <p class="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                                Workshops and Engage
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="mt-12 p-0">
                    <button
                        class="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Ticket;