import React from 'react';
import { NavLink } from 'react-router';

const Menu = () => {
    return (
        <ul className="menu menu-horizontal px-1 gap-12">
            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 rounded-none' : ''} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 rounded-none' : ''} to='/booking'>My-Booking</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 rounded-none' : ''} to='/blog'>Blog</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600 border-b-2 border-indigo-600 rounded-none' : ''} to='/contact'>Contact Us</NavLink></li>


        </ul>
    );
};

export default Menu;