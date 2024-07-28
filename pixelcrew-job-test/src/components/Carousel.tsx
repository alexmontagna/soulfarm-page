import React, { useRef, useState, useEffect } from 'react';
import Button from './Button';
import Title from './Title';
import Paragraph from './Paragraph';

interface CardProps {
    image: string;
    title: string;
    link: string;
}

const baseUrl = 'https://via.placeholder.com/244x169.png?text=';

const cards: CardProps[] = [
    {
        image: `${baseUrl}mele`,
        title: 'Mele di Bosco',
        link: '/prodotti/mele-di-bosco',
    },
    {
        image: `${baseUrl}banane`,
        title: 'Banane Biologiche',
        link: '/prodotti/banane-biologiche',
    },
    {
        image: `${baseUrl}uva`,
        title: 'Uva Succosa',
        link: '/prodotti/uva-succosa',
    },
    {
        image: `${baseUrl}vino`,
        title: 'Vino Locale',
        link: '/prodotti/vino-locale',
    },
    {
        image: `${baseUrl}carote`,
        title: 'Carote Biologiche',
        link: '/prodotti/carote-biologiche',
    },
    {
        image: `${baseUrl}pomodori`,
        title: 'Pomodori Freschi',
        link: '/prodotti/pomodori-freschi',
    },
    {
        image: `${baseUrl}fragole`,
        title: 'Fragole Dolci',
        link: '/prodotti/fragole-dolci',
    },
    {
        image: `${baseUrl}miele`,
        title: 'Miele Grezzo',
        link: '/prodotti/miele-grezzo',
    },
];

const Carousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollPosition, setMaxScrollPosition] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setMaxScrollPosition(carouselRef.current.scrollWidth - carouselRef.current.clientWidth);
        }
    }, []);

    const getScrollDistance = () => {
        if (window.innerWidth >= 1200) {
            return 990; // Desktop
        } else if (window.innerWidth >= 768) {
            return 760; // Tablet
        } else {
            return 330; // Mobile
        }
    };

    const handleScrollLeft = () => {
        const scrollDistance = getScrollDistance();
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
            setScrollPosition(carouselRef.current.scrollLeft - scrollDistance);
        }
    };

    const handleScrollRight = () => {
        const scrollDistance = getScrollDistance();
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
            setScrollPosition(carouselRef.current.scrollLeft + scrollDistance);
        }
    };

    return (
        <section className="relative bg-gray-100 py-20">
            <div className="text-center relative flex justify-between flex-col md:flex-row items-center">
                <aside className='w-36'>&nbsp;</aside>
                <div className='md:mb-14'>
                    <Title>
                        Le novità in bottega
                    </Title>
                    <Paragraph className="mx-auto px-4 text-center">
                        Nella cucina professionale/laboratorio multifunzionale (interamente alimentata a corrente) che è stata allestita
                    </Paragraph>
                </div>
                <aside className='w-36 my-8 flex justify-center items-center gap-2'>
                    <button
                        className="focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral rounded-full bg-gray-600 hover:bg-secondary"
                        onClick={handleScrollLeft}
                        disabled={scrollPosition <= 0}
                        aria-label="Scroll left"
                        style={{ opacity: scrollPosition <= 0 ? 0.3 : 1 }}
                    >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="40" height="40" rx="20" />
                            <path d="M23.7072 11.7929C23.535 11.6207 23.3059 11.5173 23.0629 11.502C22.8198 11.4867 22.5796 11.5606 22.3872 11.7099L22.2932 11.7929L14.2929 19.7935C14.1207 19.9657 14.0173 20.1949 14.002 20.4379C13.9867 20.6809 14.0606 20.9212 14.2099 21.1136L14.2929 21.2076L22.2932 29.2083C22.4731 29.3876 22.7146 29.4918 22.9686 29.4995C23.2225 29.5073 23.4699 29.4181 23.6605 29.25C23.8511 29.082 23.9705 28.8477 23.9946 28.5948C24.0187 28.3418 23.9456 28.0892 23.7902 27.8882L23.7072 27.7942L16.4139 20.5006L23.7072 13.207C23.8947 13.0195 24 12.7651 24 12.4999C24 12.2348 23.8947 11.9804 23.7072 11.7929Z" fill="white"/>
                        </svg>
                    </button>
                    <button
                        className="focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral rounded-full bg-gray-600 hover:bg-secondary"
                        onClick={handleScrollRight}
                        disabled={scrollPosition >= maxScrollPosition}
                        aria-label="Scroll right"
                        style={{ opacity: scrollPosition >= maxScrollPosition ? 0.3 : 1 }}
                    >
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="40" height="40" rx="20" />
                            <path id="Vector" d="M16.2928 11.7929C16.465 11.6207 16.6941 11.5173 16.9371 11.502C17.1802 11.4867 17.4204 11.5606 17.6128 11.7099L17.7068 11.7929L25.7071 19.7935C25.8793 19.9657 25.9827 20.1949 25.998 20.4379C26.0133 20.6809 25.9394 20.9212 25.7901 21.1136L25.7071 21.2076L17.7068 29.2083C17.5269 29.3876 17.2854 29.4918 17.0314 29.4995C16.7775 29.5073 16.5301 29.4181 16.3395 29.25C16.1489 29.082 16.0295 28.8477 16.0054 28.5948C15.9813 28.3418 16.0544 28.0892 16.2098 27.8882L16.2928 27.7942L23.5861 20.5006L16.2928 13.207C16.1053 13.0195 16 12.7651 16 12.4999C16 12.2348 16.1053 11.9804 16.2928 11.7929Z" fill="white"/>
                        </svg>
                    </button>
                </aside>
            </div>
            <div className="relative">
                <div ref={carouselRef} className="flex overflow-x-auto no-scrollbar space-x-4 pb-4 px-8 gap-4 mb-0">
                    {cards.map((card, index) => (
                        <div key={index} className="w-72 h-80 bg-white rounded-tl-[16px] flex-shrink-0 p-6 shadow-lg rounded-2xl">
                            <img src={card.image} alt={card.title} className="w-full h-40 object-cover mb-4 rounded-2xl" />
                            <h4 className="text-lg font-bold font-lexend mb-6">{card.title}</h4>
                            <Button link={card.link} content="Scopri di più" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carousel;
