import React from 'react';
import { FloatingNav } from './ui/floating-navbar';

const Nav = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Fitur",
            link: "#features",
        },
        {
            name: "preview",
            link: "#preview",
        },
        {
            name: "Testimoni",
            link: "#testimonials",
        },
        {
            name: "Contact",
            link: "#contact",
        },
    ];

    return (
        <div className='relative w-full'>
            <FloatingNav navItems={navItems} />
        </div>
    );
};

export default Nav;
