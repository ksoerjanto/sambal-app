import { db } from "../database";

export const updateRecipeRoute = {
    method: 'POST',
    path: '/api/recipes/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { name, description, imgUrl, category, ingredients, directions } = req.payload;
        const userId = '12345';
        try {
            await db.query(`
            UPDATE recipes
                SET name=?, description=?, imgUrl=?, category=?, ingredients=?, directions=?
                WHERE id=?;
        `, [name, description, imgUrl, category, ingredients, directions, id]);
        } catch (e) {
            return `Error occured: ${e}`;
        }
        
        const { results } = await db.query(
            'SELECT * FROM recipes WHERE id=?;',
            [id]
        );
        return results[0];
    }
}