import React from 'react';
import InfoCard1 from '../assets/images/InfoCard1.jpg';
import InfoCard2 from '../assets/images/InfoCard2.jpg';
import InfoCard3 from '../assets/images/InfoCard3.jpg';
import InfoCard4 from '../assets/images/InfoCard4.jpg';
import InfoCard5 from '../assets/images/InfoCard5.jpg';
import InfoCard6 from '../assets/images/InfoCard6.jpg';
import Button from './Button';
import Title from './Title';
import Paragraph from './Paragraph';

const cards = [
    { image: InfoCard1, title: "Sabato in Planetario", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
    { image: InfoCard2, title: "Momenti di Agri-creatività", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
    { image: InfoCard3, title: "Ruota dell'Anno Celtico", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
    { image: InfoCard4, title: "Sabato in Planetario", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
    { image: InfoCard5, title: "Momenti di Agri-creatività", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
    { image: InfoCard6, title: "Ruota dell'Anno Celtico", text: ( <> L'azienda è certificata <strong>biologica</strong> ed è composta da orto, frutteto e pascolo, colture cerealicole, vigneto e medicaio. </> ),link: "/planetario" },
];
const InfoCards: React.FC = () => {
    return (
        <section className="relative -mt-16 lg:-mt-20 px-16 max-w-screen-mac mx-auto">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
                {cards.map((card, index) => (
                    <div key={index} className="
                        bg-transparent
                        rounded-xl
                        flex
                        flex-col
                        p-2
                    ">
                        <a href={card.link} aria-label={`More about ${card.title}`} className="
                            focus-visible:outline-none
                            focus-visible:ring-8
                            focus-visible:ring-neutral
                            focus-visible:bg-neutral
                            focus-visible:brightness-75
                            hover:brightness-75
                            hover:text-secondary
                            rounded-xl
                            overflow-hidden
                            w-full
                            flex
                            flex-col
                            text-dark
                            ">
                            <img 
                                src={card.image} 
                                alt={`Info Card ${index + 1}`} 
                                className="
                                block
                                object-cover
                                object-center
                                aspect-square
                                rounded-xl
                                transition-transform
                                duration-200
                                ease-in-out
                                transform
                                w-full
                                h-full
                                "
                            />
                            <div className="py-0">
                                <Title type={3} className="relative">{card.title}</Title>
                                <Paragraph className="mt-2">
                                    {card.text}
                                </Paragraph>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
            <div className='container flex justify-center mt-8'>
                <Button link={'#'} content={'Scopri tutti gli eventi'} />
            </div>
        </section>
    );
};

export default InfoCards;