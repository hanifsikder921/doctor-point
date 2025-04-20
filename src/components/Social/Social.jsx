import React from 'react';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';

const Social = () => {
    return (
        <div className='flex gap-3 text-3xl items-center'>
            <FaFacebook />
            <FiInstagram />
            <FaXTwitter />
            <FaYoutube />
        </div>
    );
};

export default Social;