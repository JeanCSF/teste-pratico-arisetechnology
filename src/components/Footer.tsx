import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
    const fullYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white p-4">
            <div className="flex justify-center space-x-4">
                <a
                    href="https://wa.me/5511932094609"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    className="text-3xl"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://github.com/JeanCSF"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="text-3xl"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/jean-carlos-6149a2232/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="text-3xl"
                >
                    <FaLinkedin />
                </a>
            </div>
            <p className="text-center mt-4">
                <a
                    href="https://jeancsf.github.io/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    JeanCSF&copy; {fullYear}
                </a>
            </p>
        </footer>
    );
};

export default Footer;
