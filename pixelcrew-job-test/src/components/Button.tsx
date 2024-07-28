import React from "react";

interface ButtonProps {
    type?: 1 | 2;
    link?: string;
    content: string;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 1, link, content, className, onClick }) => {
    const handleClick = () => {
        if (onClick) onClick();
        else if (link) window.location.href = link;
    };

    const baseStyles = "text-dark text-base font-bold font-['Lexend'] leading-normal px-6 py-3 rounded-full focus-visible:ring-8 focus-visible:outline-none";
    const typeStyles = {
        1: "bg-primary hover:bg-secondary hover:text-white focus-visible:ring-secondary",
        2: "bg-primary hover:bg-neutral hover:text-secondary focus-visible:ring-neutral",
    };

    return (
        <button
            onClick={handleClick}
            className={`
                ${baseStyles}
                ${typeStyles[type]}
                ${className}
            `}
        >
            {content}
        </button>
    );
};

export default Button;
