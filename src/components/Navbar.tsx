import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi'
import { GiHotMeal } from 'react-icons/gi'
import { FaBars } from "react-icons/fa";

import './Navbar.css'

import LettersDropdown from "./dropdowns/LettersDropdown";
import IngredientDropdown from "./dropdowns/IngredientDropdown";
import CategoryDropdown from "./dropdowns/CategoryDropdown";
import AreaDropdown from "./dropdowns/AreaDropdown";

const Navbar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?s=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar" className="bg-slate-950 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="brand flex items-center text-2xl font-semibold" title="Home">
          <GiHotMeal className="mr-2 text-yellow-500" />
          RecipesDB
        </Link>
        <button
          className="hamburger text-2xl"
          title="Toggle Navbar"
          role="button"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars />
        </button>
        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul className="flex space-x-4 bg-slate-950">
            <li className="links flex items-center text-yellow-300 hover:bg-yellow-300/75 hover:text-stone-900 p-3">
              <LettersDropdown  />
            </li>
            <li className="links flex items-center text-yellow-300 hover:bg-yellow-300/75 hover:text-stone-900 p-3">
              <IngredientDropdown />
            </li>
            <li className="links flex items-center text-yellow-300 hover:bg-yellow-300/75 hover:text-stone-900 p-3">
              <CategoryDropdown />
            </li>
            <li className="links flex items-center text-yellow-300 hover:bg-yellow-300/75 hover:text-stone-900 p-3">
              <AreaDropdown />
            </li>
            <li>
              <form onSubmit={handleSubmit} className="flex items-center my-1">
                <input
                  type="text"
                  placeholder="Search a Meal"
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  className="px-2 py-3 bg-gray-700 text-white rounded-l"
                />
                <button
                  type="submit"
                  role="search"
                  title="Search"
                  id="search"
                  className="bottom-0 bg-yellow-500 text-2xl text-gray-900 p-3 rounded-r"
                >
                  <BiSearchAlt2 />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
