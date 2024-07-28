import React from 'react';
import heroImage from '../assets/images/hero.jpeg';
import Title from './Title';
import Paragraph from './Paragraph';

const Hero: React.FC = () => {
    return (
        <section
            className="h-[25rem] sm:h-[25rem] md:h-[30rem] lg:h-[40rem] xl:h-[43rem] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${heroImage})` }}
            aria-labelledby="hero-heading"
            role="img"
            aria-describedby="hero-description"
        >
            <div
                className="flex flex-col justify-center w-full sm:w-3/4 h-full p-4 sm:p-8 md:p-12"
                style={{
                    background: 'linear-gradient(90deg, #ffffff 38%, #ffffff00 100%)',
                }}
            >
                <Title type={1} className="w-1/2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#56D698] to-[#3C8D3A]">Soulfarm</span><br />
                    <span className="relative">Agricoltura Familiare</span>
                </Title>
                <Paragraph
                    id="hero-description"
                    type={3}
                >
                    L'azienda è certificata biologica ed è composta da orto, frutteto e pascolo.
                </Paragraph>
            </div>
        </section>
    );
};

export default Hero;
