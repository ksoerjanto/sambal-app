import { db } from "../database"

export const getAllRecipesRoute = {
    method: 'GET',
    path: '/api/recipes',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM recipes'
        );
        return results;
    }
}

export const getDessertRecipesRoute = {
    method: 'GET',
    path: '/api/desserts',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM recipes
            WHERE category = ?;`,
            ["DESSERTS"]
        );
        return results;
    }
}

export const getFoodRecipesRoute = {
    method: 'GET',
    path: '/api/food',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM recipes
            WHERE category = ?;`,
            ["FOOD"]
        );
        return results;
    }
}

export const getDrinksRecipesRoute = {
    method: 'GET',
    path: '/api/drinks',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM recipes
            WHERE category = ?;`,
            ["DRINKS"]
        );
        return results;
    }
}

export const getSnacksRecipesRoute = {
    method: 'GET',
    path: '/api/snacks',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM recipes
            WHERE category = ?;`,
            ["SNACKS"]
        );
        return results;
    }
}
