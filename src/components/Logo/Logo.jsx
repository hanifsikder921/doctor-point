import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <FaPlusCircle className='text-blue-600' size={40}  />
            <span className='text-3xl font-bold'>Doctor Point</span>
        </div>
    );
};

export default Logo;