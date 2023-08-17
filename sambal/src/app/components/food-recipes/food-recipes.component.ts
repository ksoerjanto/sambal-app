import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-food-recipes',
  templateUrl: './food-recipes.component.html',
  styleUrls: ['./food-recipes.component.css']
})
export class FoodRecipesComponent {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getAllFoodRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }
}
