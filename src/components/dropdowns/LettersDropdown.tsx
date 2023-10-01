import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LettersDropdown: React.FC = () => {
    const navigate = useNavigate();
    const [letters, setLetters] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    useEffect(() => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        setLetters(alphabet);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLetterChange = (letter: string) => {
        setIsDropdownOpen(false);
        if (!letter) return;
        if (letter) {
            navigate(`/by_letter?f=${letter}`);
        }
    };

    return (
        <div className="relative block font-bold">
            <button
                title='List of meals by the letter selected'
                onClick={()=> {
                    toggleDropdown();
                }}
                className="bg-transparent"
            >
                By Letter
            </button>
            {isDropdownOpen && (
                <div className="z-50 absolute h-96 sm:h-60 mt-4 w-[450%] sm:w-48 shadow-lg bg-slate-950">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {letters.map((letter) => (
                            <button
                                key={letter}
                                onClick={() => handleLetterChange(letter)}
                                className="p-2 my-auto mx-auto font-bold text-lg text-gray-100 hover:bg-yellow-300/75 hover:text-stone-900 text-center"
                                role="menuitem"
                            >
                                {letter}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LettersDropdown;
