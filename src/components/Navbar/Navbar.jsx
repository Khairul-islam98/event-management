import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import userImg from '../../assets/images/user.png';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(() => {

            })
            .catch()
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
            }
        >
            Gallery
        </NavLink></li>
        <li><NavLink
            to="/contactus"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
            }
        >
            Contact
        </NavLink></li>
        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
            }
        >
            Login
        </NavLink></li>
        <li><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
            }
        >
            Register
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-md rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="navbar-item">
                    <img src={logo} alt="logo" className=" h-14" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                    <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} /> : 
                                <img src={userImg} />

                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-center">
                                {
                                    user ? <h2 className='font-bold text-pink-500'>Name: {user && <span> {user.displayName} </span>}</h2> :
                                    <p></p>
                                }

                            </a>
                        </li>
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn bg-pink-500 text-white'>Sign Out</button>
                                :
                                <Link to='/login'>
                                    <button className='btn w-full'>Login</button>
                                </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;




