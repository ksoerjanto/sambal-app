import { db } from "../database";

export const deleteRecipeRoute = {
    method: 'DELETE',
    path: '/api/recipes/{id}',
    handler: async (req, h) => {
        const { id } = req.params;
        await db.query(
            'DELETE FROM recipes WHERE id=?;',
            [id]
        );
        return { message: 'Deletion successful!' };
    }
}