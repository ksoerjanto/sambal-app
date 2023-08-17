import { addViewToRecipe } from "./addView";
import { createNewRecipeRoute } from "./createNewRecipe";
import { deleteRecipeRoute } from "./deleteRecipe";
import { getAllRecipesRoute, getDessertRecipesRoute, getDrinksRecipesRoute, getFoodRecipesRoute, getSnacksRecipesRoute } from "./getAllRecipes";
import { getRecipeRoute } from "./getRecipe";
import { updateRecipeRoute } from "./updateRecipe";
import { staticFilesRoute, filesRoutes } from "./files";

export default [
    addViewToRecipe,
    createNewRecipeRoute,
    deleteRecipeRoute,
    getAllRecipesRoute,
    getDessertRecipesRoute,
    getDrinksRecipesRoute,
    getFoodRecipesRoute,
    getSnacksRecipesRoute,
    getRecipeRoute,
    updateRecipeRoute,
    staticFilesRoute,
    ...filesRoutes,
];
