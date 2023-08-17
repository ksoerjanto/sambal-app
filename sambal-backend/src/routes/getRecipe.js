import Boom from '@hapi/boom';
import { db } from '../database';

export const getRecipeRoute = {
    method: 'GET',
    path: '/api/recipes/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM recipes WHERE id=?',
            [id]
        );
        const recipe = results[0];
        if (!recipe) throw Boom.notFound(`Recipe does not exist with id ${id}`);
        return recipe;
    },
}