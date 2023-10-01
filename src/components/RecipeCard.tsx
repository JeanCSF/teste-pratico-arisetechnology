import { Recipe } from '../pages/Home';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
    recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {

    const openYoutubeVideo = () => {
        if (recipe.strYoutube) {
            window.open(recipe.strYoutube, "_blank");
        } else {
            alert("This meal won't have a youtube video!");
        }
    };

    const openMealSource = () => {
        if (recipe.strSource) {
            window.open(recipe.strSource, "_blank");
        } else {
            alert("This meal won't have a source link!");
        }
    };
    return (
        <div className="bg-stone-950/25 rounded-lg shadow-lg p-4 hover:scale-105 transform transition-transform duration-300 ease-in-out">
            <Link to={`../meal/${recipe.idMeal}`}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-auto rounded" />
                <p title='Meal Title' className="text-yellow-300 font-bold mt-2">{recipe.strMeal}</p>
                {recipe.strInstructions && (
                <div>
                    <p title='Meal Category' className="text-slate-50">{recipe.strCategory}</p>
                    <p title='Meal Instructions' className="mt-2 text-slate-200">{recipe.strInstructions.substring(0, 100)}</p>
                </div>)}
            </Link>
            <div className="flex justify-between">
                {recipe.strYoutube && (
                    <button
                        onClick={openYoutubeVideo}
                        className="bg-yellow-300 hover:bg-yellow-900 text-black font-bold py-2 px-4 rounded mt-5"
                    >
                        Youtube
                    </button>
                )}
                {recipe.strSource && (
                    <button
                        onClick={openMealSource}
                        className="bg-yellow-300 hover:bg-yellow-900 text-black font-bold py-2 px-4 rounded mt-5"
                    >
                        Source
                    </button>
                )}
            </div>
        </div>
    );
};

export default RecipeCard;