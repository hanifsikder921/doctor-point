import React from 'react';
import Button from '../ui/Button';

import men from '../../assets/d2-min.png'
import women from '../../assets/d1-min.png'

const Hero = () => {
    return (
        <div>

            <section
                className="font-plus flex flex-col text-center items-center justify-center gap-6 p-16  my-5 border-[3px] border-white rounded-[24px] bg-gradient-to-b from-white/0 to-white">
                <h1 className='text-5xl font-extrabold'>Dependable Care, Backed by Trusted <br />Professionals.</h1>
                <p className='w-3/4 text-gray-600 text-base'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>

                <div className='w-full'>
                    <form>
                        <input type="text"
                            placeholder='Search Any Doctor...'
                            className='bg-white border border-gray-300 rounded-3xl shadow-md w-4/12 h-12 px-4 mb-3 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0'
                        />
                        <Button label='Search Now' type='submit' />
                    </form>
                </div>

                <div className='flex gap-6 flex-col md:flex-row'>
                    <img src={men} className='rounded-2xl shadow-lg' alt="" />
                    <img src={women} className='rounded-2xl shadow-lg' alt="" />

                </div>
            </section>
        </div>
    );
};

export default Hero;