import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
    strCategory: string;
}

const CategoryDropdown: React.FC = () => {
    const api = import.meta.env.VITE_LIST_CATEGORIES;
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [filteredIngredients, setFilteredCategories] = useState<Category[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const getCategories = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setCategories(data.meals || []);
        } catch (error) {
            console.error("Error on find meals:", error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        const filtered = categories.filter((category) =>
            category.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredCategories(filtered);
    }, [categories, searchQuery]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (category: string) => {
        setIsDropdownOpen(false);
        setSearchQuery('');
        if (!category) return;
        if (category) {
            navigate(`/by_category?c=${category}`);
        }
    };

    return (
        <div className="relative block font-bold">
            <button
                title="List of meals by the selected category"
                onClick={() => {
                    toggleDropdown();
                }}
                className="bg-transparent h-full"
            >
                By Category
            </button>
            {isDropdownOpen && (
                <div className="z-50 absolute mt-4 w-[298%] sm:w-96 max-h-96 overflow-y-auto shadow-lg bg-slate-950">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <input
                            type="text"
                            placeholder="Search Category"
                            className="w-full p-2 border-b border-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {filteredIngredients.map((category) => (
                            <button
                                key={category.strCategory}
                                onClick={() => handleCategorySelect(category.strCategory)}
                                className="block p-2 my-auto font-bold text-lg text-gray-100 hover:bg-yellow-300/75 hover:text-stone-900"
                                role="menuitem"
                            >
                                {category.strCategory}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
