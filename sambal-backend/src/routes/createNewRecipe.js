import { v4 as uuid } from 'uuid';
import { db } from '../database';

export const createNewRecipeRoute = {
    method: 'POST',
    path: '/api/recipes',
    handler: async (req, h) => {
        const userId = '12345';
        const id = uuid();
        const {
            name = '',
            description = '',
            img_url = '',
            category = '',
            ingredients = '',
            directions = ''
        } = req.payload;
        const views = 0;

        try {
            await db.query(`
            INSERT INTO recipes (id, name, description, img_url, category, ingredients, directions, views)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        `,
            [id, name, description, img_url, category, ingredients, directions, views]
        );
        } catch(e) {
            return `Error occured: ${e}`;
        }
        

        return { id, name, description, img_url, category, ingredients, directions, views };
    }
};