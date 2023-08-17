import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-my-recipes-page',
  templateUrl: './my-recipes-page.component.html',
  styleUrls: ['./my-recipes-page.component.css']
})
export class MyRecipesPageComponent {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getAllRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }

  onDeleteClicked(id: string) {
    this.recipesService.deleteRecipe(id)
      .subscribe(() => {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id)
      });
    alert(`Deleting recipe with ID: ${id}`);
  }
}
