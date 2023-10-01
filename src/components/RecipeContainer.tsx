interface Recipe {
    idMeal: number;
    strMeal: string;
    strDrinkAlternate: string | null;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1?: string | null;
    strIngredient2?: string | null;
    strIngredient3?: string | null;
    strIngredient4?: string | null;
    strIngredient5?: string | null;
    strIngredient6?: string | null;
    strIngredient7?: string | null;
    strIngredient8?: string | null;
    strIngredient9?: string | null;
    strIngredient10?: string | null;
    strIngredient11?: string | null;
    strIngredient12?: string | null;
    strIngredient13?: string | null;
    strIngredient14?: string | null;
    strIngredient15?: string | null;
    strIngredient16?: string | null;
    strIngredient17?: string | null;
    strIngredient18?: string | null;
    strIngredient19?: string | null;
    strIngredient20?: string | null;
    strMeasure1?: string | null;
    strMeasure2?: string | null;
    strMeasure3?: string | null;
    strMeasure4?: string | null;
    strMeasure5?: string | null;
    strMeasure6?: string | null;
    strMeasure7?: string | null;
    strMeasure8?: string | null;
    strMeasure9?: string | null;
    strMeasure10?: string | null;
    strMeasure11?: string | null;
    strMeasure12?: string | null;
    strMeasure13?: string | null;
    strMeasure14?: string | null;
    strMeasure15?: string | null;
    strMeasure16?: string | null;
    strMeasure17?: string | null;
    strMeasure18?: string | null;
    strMeasure19?: string | null;
    strMeasure20?: string | null;
    strSource: string | null;
    strImageSource: string | null;
    strCreativeCommonsConfirmed: string | null;
    dateModified: Date | null;
}

interface RecipeProps {
    recipe: Recipe;
}

const RecipeContainer: React.FC<RecipeProps> = ({ recipe }) => {
    const measures: string[] = [];
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}` as keyof Recipe;
        const ingredientValue = recipe[ingredientKey];
        const measureKey = `strMeasure${i}` as keyof Recipe;
        const measureValue = recipe[measureKey];

        if (typeof ingredientValue === 'string' && ingredientValue.trim() !== '') {
            ingredients.push(ingredientValue);
        }
        if (typeof measureValue === 'string' && measureValue.trim() !== '') {
            measures.push(measureValue);
        }
    }
    return (
        <div className="p-4 w-[90%] grid grid-cols-1 sm:grid-cols-1 mx-auto">
            <div className="flex flex-col justify-evenly">
                <p title='Meal Title' className="text-xl text-yellow-300 font-bold my-2">{recipe.strMeal}</p>
                <div className="flex justify-between">
                    <p title='Meal Category' className="text-slate-50 mt-1"><span className="font-bold text-lg">Category:</span> {recipe.strCategory}</p>
                    <p title='Meal Area' className="text-slate-50 mt-1"><span className="font-bold text-lg">Area:</span> {recipe.strArea}</p>
                </div>
                <p title='Meal Instructions' className="mt-2 text-slate-200 text-lg mt-5">{recipe.strInstructions}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
                <div className="grid grid-cols-1 gap-4">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-auto rounded" />
                    <p title="Meal Tags" className="text-slate-50 mt-1"><span className="font-bold text-lg">Tags:</span> {recipe.strTags}</p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <p title='Meal Ingredients' className="text-slate-50 mt-1 font-semibold text-lg mb-2">Ingredients</p>
                        <ol>
                            {ingredients.map((ingredient, index) => (
                                <li className="list-decimal text-slate-50" key={index}>{ingredient}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <p title='Meal Ingredients Measures' className="text-slate-50 mt-1 font-semibold text-lg mb-2">Measures</p>
                        <ol>
                            {measures.map((ingredient, index) => (
                                <li className="text-slate-50" key={index}>{ingredient}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-5">
                {recipe.strYoutube && (
                    <div className="mt-4">
                        <a
                            href={recipe.strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Watch Video
                        </a>
                    </div>
                )}
                {recipe.strSource && (
                    <div className="mt-4">
                        <a
                            href={recipe.strSource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Source
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecipeContainer;
