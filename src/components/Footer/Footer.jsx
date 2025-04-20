import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';


const Footer = () => {
    return (
        <div>
            <section className='py-10  flex flex-col items-center gap-2 bg-white'>
                <Logo/>
                <Menu/>
                <div className='divider w-2/4 mx-auto'/>
                <Social/>
            </section>
        </div>
    );
};

export default Footer;