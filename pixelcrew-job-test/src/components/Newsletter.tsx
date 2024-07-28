import React, { useState } from 'react';
import NewsletterImage from './../assets/images/newsletter.jpeg';
import Button from './Button';
import Title from './Title';
import Paragraph from './Paragraph';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (message) setMessage(null);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (validateEmail(email)) {
            console.log('Valid email:', email);
            setMessage('Grazie! Controlla la tua mail per concludere l\'iscrizione');
            setIsError(false);
        } else {
            setMessage('Indirizzo email invalido');
            setIsError(true);
        }
    };

    return (
        <section className="bg-yellow-100 flex flex-col items-center p-10 lg:p-20 relative">
            <div
                className="rounded-2xl w-full max-w-7xl h-[30.375rem] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center text-white p-8"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${NewsletterImage})`
                }}
            >
                <Title className="relative mb-4">
                    Rimani aggiornato
                </Title>
                <Paragraph type={2} className="text-center mb-8">
                    Per non perderti nessuna novità!
                </Paragraph>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center w-full max-w-lg bg-white rounded-full p-1.5"
                >
                    <div className="flex items-center flex-grow px-4 py-2">
                        <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.50002 5.66675H25.5C26.6069 5.66668 27.6718 6.07692 28.4763 6.81332C29.2809 7.54973 29.764 8.55646 29.8267 9.627L29.8334 9.86466V22.1355C29.8334 23.2078 29.4099 24.2394 28.6498 25.0188C27.8896 25.7982 26.8504 26.2663 25.7454 26.327L25.5 26.3334H7.50002C6.39317 26.3335 5.32825 25.9232 4.52371 25.1868C3.71918 24.4504 3.23602 23.4437 3.17335 22.3732L3.16669 22.1355V9.86466C3.16661 8.7924 3.59009 7.76076 4.35025 6.98137C5.11041 6.20197 6.14961 5.73391 7.25469 5.67321L7.50002 5.66675ZM27.8334 12.6069L16.9667 18.1481C16.844 18.2109 16.7091 18.2483 16.5707 18.2578C16.4323 18.2674 16.2933 18.249 16.1627 18.2037L16.0347 18.1494L5.16669 12.6082V22.1355C5.16671 22.7028 5.38691 23.2493 5.78359 23.6666C6.18027 24.0839 6.72442 24.3415 7.30802 24.3882L7.50002 24.3959H25.5C26.0858 24.3959 26.6502 24.1824 27.081 23.7978C27.5118 23.4133 27.7775 22.8858 27.8254 22.3202L27.8334 22.1355V12.6069ZM25.5 7.60425H7.50002C6.91443 7.60427 6.35026 7.81759 5.9195 8.20188C5.48873 8.58616 5.22287 9.1133 5.17469 9.67866L5.16669 9.86466V10.4188L16.5 16.1964L27.8334 10.4175V9.86466C27.8333 9.29717 27.6129 8.75046 27.216 8.33313C26.819 7.91579 26.2745 7.65837 25.6907 7.612L25.5 7.60425Z"
                                fill="black"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={handleEmailChange}
                            className="
                                flex-grow
                                bg-transparent
                                text-gray-500
                                text-base
                                font-normal
                                leading-6
                                outline-none
                                ml-2
                                rounded-lg
                                px-2
                                focus-visible:ring-4
                                focus-visible:ring-secondary
                                lowercase
                            "
                        />
                    </div>
                    <Button
                        link="#"
                        content="Iscriviti"
                        className="absolute left-2/4 -translate-x-1/2 translate-y-32 sm:translate-y-28 md:relative md:transform-none md:left-auto"
                        onClick={handleSubmit}
                    />
                </form>
                <div className='min-h-12'>
                    {message && (
                        <p className={` bg-white bottom-14 text-center sm:min-w-max mt-2 rounded-full text-md px-4 py-1 ${isError ? 'text-red-500' : 'text-secondary'}`}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
