import { useState } from "react";

function RecipeFinder(){
    const [query, setQuery] = useState(" ");
    const [recipes, setRecipes] = useState([])

    function handleQuery(event) {
        setQuery(event.target.value)
    }

    async function handleClick() {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        let data = await response.json();
        setRecipes(data.meals || []);
    }

    return (
        <div>
            <h2> Recipe Finder</h2>
            <input value={query} onChange={handleQuery} placeholder="Search Recipes...." />
            <button onClick={handleClick} > Search </button>
            <ul>
                {recipes.map((meal) => (
                    <li key={meal.id}>
                        <h4>{meal.strMeal}</h4>
                        <img src={meal.strMeal} alt={meal.strMeal} width="100" />
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default RecipeFinder;