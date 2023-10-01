import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Area {
    strArea: string;
}

const AreaDropdown: React.FC = () => {
    const api = import.meta.env.VITE_LIST_AREAS;
    const navigate = useNavigate();
    const [setAreas, setCategories] = useState<Area[]>([]);
    const [filteredAreas, setFilteredAreas] = useState<Area[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const getAreas = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setCategories(data.meals || []);
        } catch (error) {
            console.error("Error on find meals:", error);
        }
    };

    useEffect(() => {
        getAreas();
    }, []);

    useEffect(() => {
        const filtered = setAreas.filter((area) =>
            area.strArea.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredAreas(filtered);
    }, [setAreas, searchQuery]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleCategorySelect = (area: string) => {
        setIsDropdownOpen(false);
        setSearchQuery('');
        if (!area) return;
        if (area) {
            navigate(`/by_area?a=${area}`);
        }
    };

    return (
        <div className="relative block font-bold">
            <button
                title="List of meals by the selected area"
                onClick={() => {
                    toggleDropdown();
                }}
                className="bg-transparent h-full"
            >
                By Area
            </button>
            {isDropdownOpen && (
                <div className="z-50 absolute mt-4 w-[298%] sm:w-96 max-h-96 overflow-y-auto shadow-lg bg-slate-950">
                    <div role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <input
                            type="text"
                            placeholder="Search Area"
                            className="w-full p-2 border-b border-gray-700"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {filteredAreas.map((area) => (
                            <button
                                key={area.strArea}
                                onClick={() => handleCategorySelect(area.strArea)}
                                className="block p-2 my-auto font-bold text-lg text-gray-100 hover:bg-yellow-300/75 hover:text-stone-900"
                                role="menuitem"
                            >
                                {area.strArea}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AreaDropdown;
