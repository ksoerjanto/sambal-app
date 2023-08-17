import { db } from "../database";

export const addViewToRecipe = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;
        await db.query(
            'UPDATE recipes SET views=views+1 WHERE id=?',
            [id],
        );
        const { results } = await db.query(
            'SELECT * FROM recipes WHERE id=?',
            [id],
        );
        const updatedRecipe = results[0];
        return updatedRecipe;
    }
}