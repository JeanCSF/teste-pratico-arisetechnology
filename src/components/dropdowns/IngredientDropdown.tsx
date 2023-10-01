import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Ingredient {
    idIngredient: number;
    strIngredient: string;
    strDescription: string | null;
    strType: string | null;
}

const IngredientDropdown: React.FC = () => {
    const api = import.meta.env.VITE_LIST_INGREDIENTS;
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const getIngredients = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setIngredients(data.meals || []);
        } catch (error) {
            console.error("Error on find meals:", error);
        }
    };

    useEffect(() => {
        getIngredients();
    }, []);

    useEffect(() => {
        const filtered = ingredients.filter((ingredient) =>
            ingredient.strIngredient.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredIngredients(filtered);
    }, [ingredients, searchQuery]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleIngredientSelect = (ingredient: string) => {
        setIsDropdownOpen(false);
        setSearchQuery('');
        if (!ingredient) return;
        if (ingredient) {
            navigate(`/by_ingredient?i=${ingredient}`);
        }
    };

    return (
        <div className="relative block font-bold">
            <button
                title="List of meals by the selected ingredient"
                onClick={() => {
                    toggleDropdown();
                }}
                className="bg-transparent h-full"
            >
                By Ingredient
            </button>
            {isDropdownOpen && (
                <div className="z-50 absolute mt-4 w-[298%] sm:w-96 max-h-96 overflow-y-auto shadow-lg bg-slate-950">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <input
                            type="text"
                            placeholder="Search Ingredient"
                            className="w-full p-2 border-b border-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {filteredIngredients.map((ingredient) => (
                            <button
                                key={ingredient.idIngredient}
                                onClick={() => handleIngredientSelect(ingredient.strIngredient)}
                                className="block p-2 my-auto font-bold text-lg text-gray-100 hover:bg-yellow-300/75 hover:text-stone-900"
                                role="menuitem"
                            >
                                {ingredient.strIngredient}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default IngredientDropdown;
