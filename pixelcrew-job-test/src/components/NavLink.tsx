import React from 'react';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    return (
        <a
            href={href}
            className="
                font-lexend
                text-sm
                font-bold
                leading-[1.375rem]
                py-2
                px-4
                transition-colors
                bg-transparent
                hover:bg-[#1c4a36]
                focus:bg-[#1c4a36]
                active:bg-[#1b4331]
                focus-visible:outline-none
                mx-0
                rounded-full
            "
        >
            {children}
        </a>
    );
};

export default NavLink;
