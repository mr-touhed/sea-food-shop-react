import React from 'react';

const Header = () => {
    return (
        <div className='w-full bg-[#23180D]'>
            <div className='md:w-[1280px] mx-auto px-2 h-20 text-white flex justify-between items-center'>
                    <h3 className='font-semibold text-lg'>Sea Food Shop </h3>
                    <nav>
                        <a className=' hover:text-yellow-300' href="/">Home</a>
                        <a className='mx-3 hover:text-yellow-300' href="/">About</a>
                        <a className=' hover:text-yellow-300' href="/">Blog</a>
                    </nav>
            </div>
        </div>
    );
};

export default Header;