import React, { useState } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-secondary w-full shadow-md z-10 flex flex-wrap items-center justify-between px-4 md:px-10 lg:px-20 py-4">
            <div className="flex items-center justify-between w-full xl:w-auto">
                <a
                    href="#"
                    aria-label="Go to Soul Farm's homepage"
                    title="Go to Soul Farm's homepage"
                    className="focus-visible:outline-none focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3"
                >
                    <Logo />
                </a>
                <button
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    className="text-white xl:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>
            <nav id="primary-navigation" className={`flex flex-col text-center xl:flex-row xl:items-center lg:gap-4 xl:gap-6 xxl:gap-10 text-white mt-4 xl:mt-0 ${isOpen ? 'block' : 'hidden xl:flex'} w-full xl:w-auto`}>
                <NavLink href="/azienda-agricola">Azienda agricola</NavLink>
                <NavLink href="/fattoria-didattica">Fattoria didattica</NavLink>
                <NavLink href="/agriturismo">Agriturismo</NavLink>
                <NavLink href="/bio-e-sostenibilita">Bio e sostenibilità</NavLink>
                <NavLink href="/turismo-e-territorio">Turismo e territorio</NavLink>
                <NavLink href="/dove-siamo">Dove siamo</NavLink>
            </nav>
        </header>
    );
};

export default Header;
