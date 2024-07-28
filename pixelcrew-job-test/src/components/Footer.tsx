import React from 'react';
import Logo from './Logo';
import SupportIMG1 from './../assets/images/support-1.png';
import SupportIMG2 from './../assets/images/support-2.png';
import SupportIMG3 from './../assets/images/support-3.png';
import SupportIMG4 from './../assets/images/support-4.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary flex flex-col items-start p-20 gap-6 text-primary">
            <div className="w-full">
                <Logo />
                <div className="w-full h-[1px] bg-neutral mt-8"></div>
            </div>
            <div className="flex flex-wrap justify-between w-full max-w-[90rem] gap-4 md:gap-y-10">
                <div className="flex flex-col gap-2">
                    <h4 className="uppercase text-lg font-lexend font-bold">Azienda agricola</h4>
                    <ul className="text-base text-white grid gap-1">
                        <li><a href="/agricoltura" className="no-underline hover:underline">Agricoltura</a></li>
                        <li><a href="/allevamenti" className="no-underline hover:underline">Allevamenti</a></li>
                        <li><a href="/bottega-agricola" className="no-underline hover:underline">Bottega agricola</a></li>
                        <li><a href="/punti-vendita" className="no-underline hover:underline">Punti vendita</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="uppercase text-lg font-lexend font-bold">Fattoria didattica</h4>
                    <ul className="text-base text-white grid gap-1">
                        <li><a href="/attivita-scuole" className="no-underline hover:underline">Attività scuole</a></li>
                        <li><a href="/attivita-grandi-piccoli" className="no-underline hover:underline">Attività per grandi e piccoli</a></li>
                        <li><a href="/planetario" className="no-underline hover:underline">Planetario</a></li>
                        <li><a href="/fattoria-sociale" className="no-underline hover:underline">Fattoria sociale</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="uppercase text-lg font-lexend font-bold">Informazioni</h4>
                    <ul className="text-base grid gap-1">
                        <li><a href="/agriturismo" className="no-underline hover:underline">AGRITURISMO</a></li>
                        <li><a href="/bio-sostenibilita" className="no-underline hover:underline">BIO E SOSTENIBILITÀ</a></li>
                        <li><a href="/turismo-territorio" className="no-underline hover:underline">TURISMO E TERRITORIO</a></li>
                        <li><a href="/contatti" className="no-underline hover:underline">CONTATTI</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2 bg-support rounded-lg p-3 max-w-xs">
                    <div className="flex flex-wrap gap-1">
                        <img src={SupportIMG1} alt="Lorem" />
                        <img src={SupportIMG2} alt="Lorem" />
                        <img src={SupportIMG3} alt="Lorem" />
                        <img src={SupportIMG4} alt="Lorem" />
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-neutral mt-3"></div>
            <div className="flex justify-between w-full max-w-[90rem] text-sm mt-4 flex-col md:flex-row gap-8">
                <div className='text-white'>
                    <p>Azienda Agricola "Elilu" di Gastaldi Elisa - Agricultura Familiare</p>
                    <p>P.IVA 02322540184</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 text-white'>
                    <span>✏️ Code <a href="/dev-page" className="underline hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Emiliano Bucci</a></span>
                    <span>🎨 Design <a href="/designer-page" className="underline hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">Michele Fasani</a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
