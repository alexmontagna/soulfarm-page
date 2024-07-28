import React, { Children } from "react";

interface ParagraphProps {
    id?: string;
    type?: 1 | 2 | 3;
    text?: string;
    className?: string;
    children?: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ id, type = 1, text, className, children }) => {
    const baseStyles = "text-base font-Lexend leading-normal xxl:leading-relaxed xxl:text-lg";
    const typeStyles = {
        1: "",
        2: "text-white",
        3: "font-[MADE Dillan] mt-6 font-bold text-sm sm:text-base md:text-lg leading-[1.625rem] max-w-[21.25rem]",
    };

    return (
        <p
            id={id}
            className={`
                ${baseStyles}
                ${typeStyles[type]}
                ${className}
            `}
        >
            {text || children}
        </p>
    );
};

export default Paragraph;
