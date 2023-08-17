export interface Recipe {
    id: string,
    name: string,
    description: string,
    imgUrl: string,
    category: Category,
    ingredients: string,
    directions: string
}

export enum Category {
    DESSERTS = 'DESSERTS',
    DRINKS = 'DRINKS',
    FOOD = 'FOOD',
    SNACKS = 'SNACKS'
}