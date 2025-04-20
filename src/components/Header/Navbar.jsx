import React from 'react';
import { Link, NavLink } from 'react-router';
import Button from '../ui/Button';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

const Navbar = () => {
    return (
        <div className="navbar p-0 bg-gray-100 shadow-sm px-8 md:px-18 lg:px-16 xl:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" cursor-pointer mr-2 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg font-medium">
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/booking'>My-Booking</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/blog'>blog</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to='/contact'>Contact Us</NavLink></li>

                    </ul>
                </div>
                <Link to='/'><Logo/></Link>
            </div>

            <div className="navbar-center hidden lg:flex text-lg font-medium">
               <Menu/>
            </div>

            <div className='navbar-end hidden md:flex'>
                <Button label={'Emergency'} />
            </div>

        </div>
    );
};

export default Navbar;