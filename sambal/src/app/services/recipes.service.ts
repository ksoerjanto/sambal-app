import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Recipe } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getAllRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('/api/recipes');
  }

  getAllDessertRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('/api/desserts');
  }

  getAllFoodRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>('/api/food');
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`/api/recipes/${id}`);
  }

  addViewToRecipe(id: string): Observable<Recipe> {
    return this.httpClient.post<Recipe>(`/api/recipes/${id}/add-view`,
    {},
    httpOptions);
  }

  createNewRecipe(
    name: string,
    description: string,
    imgUrl: string,
    category: Category,
    ingredients: string,
    directions: string): Observable<Recipe> {
      return this.httpClient.post<Recipe>(
        '/api/recipes',
        { name, description, imgUrl, category, ingredients, directions },
        httpOptions);
    }

  editRecipe(
    id: string,
    name: string,
    description: string,
    imgUrl: string,
    category: Category,
    ingredients: string,
    directions: string): Observable<Recipe> {
      return this.httpClient.post<Recipe>(`/api/recipes/${id}`,
      { name, description, imgUrl, category, ingredients, directions },
      httpOptions);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.httpClient.delete<any>(`/api/recipes/${id}`);
  }
}
