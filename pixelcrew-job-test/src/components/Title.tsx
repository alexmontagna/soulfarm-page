import React from 'react';

interface TitleProps {
    type?: 1 | 2 | 3 | 4 | 5 | 6;
    text?: string;
    className?: string;
    children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ type = 2, text, className, children }) => {
    const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements;

    const typeStyles = {
        1: 'font-[MADE Dillan] text-5xl md:text-6xl lg:text-8xl font-normal leading-none',
        2: 'font-[MADE Dillan] text-4xl md:text-5xl text-center mb-4',
        3: 'font-[MADE Dillan] text-2xl mt-4',
        4: 'font-[MADE Dillan] text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-normal leading-none',
        5: 'font-[MADE Dillan] text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-normal leading-none',
        6: 'font-[MADE Dillan] text-4xl sm:text-5xl md:text-6xl lg:text-[6.25rem] font-normal leading-none',
    };

    return (
        <HeadingTag className={`
            ${typeStyles[type]}
            ${className}
        `}>
            {text || children}
        </HeadingTag>
    );
};

export default Title;
