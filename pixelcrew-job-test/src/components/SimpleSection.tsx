import React from 'react';
import Button from './Button';
import PlanetarioImage from './../assets/images/planetario.png';
import PlanetarioBackground from './../assets/images/leaves.png';
import Title from './Title';
import Paragraph from './Paragraph';

const SimpleSection: React.FC = () => {
    return (
        <section className="relative flex flex-col md:flex-row bg-secondary text-white p-4 md:p-8 lg:p-16 gap-4 md:gap-10 xl:gap-16 justify-center items-center md:justify-start flex-wrap mt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={PlanetarioBackground}
                    alt="Background"
                    className="w-full h-full object-cover mix-blend-multiply"
                    style={{ filter: 'brightness(0.5) opacity(0.15)' }}
                />
            </div>
            <div className='
            w-full max-w-screen-mac mx-auto
            flex flex-col md:flex-row gap-x-4 gap-y-10 md:gap-10 xl:gap-16 justify-center items-center md:justify-start flex-wrap my-16 overflow-hidden
            '>
                <div className="relative w-[480px] h-[356px] md:w-[46%] max-w-full z-10">
                    <img
                        src={PlanetarioImage}
                        alt="Planetario"
                        className="w-full h-full object-cover rounded-2xl"
                        loading="lazy"
                    />
                </div>
                <div className="relative flex flex-col justify-start items-start gap-6 md:w-[46%] z-10">
                    <div className="flex flex-col justify-start items-start gap-4">
                        <Title>Il Planetario</Title>
                        <Paragraph className="max-w-md text-white">
                            Finalmente il nostro planetario vi potrà accogliere anche nei mesi invernali. Ci aspettano una serie di appuntamenti pomeridiani - sabato pomeriggio - per scoprire i segreti del cielo e una serie di appuntamenti speciali dedicati alla Ruota dell'Anno Celtico.
                        </Paragraph>
                    </div>
                    <Button type={2} link="#planetario" content="Visita il planetario" />
                </div>
            </div>
        </section>
    );
};

export default SimpleSection;
