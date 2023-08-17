import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-dessert-recipes',
  templateUrl: './dessert-recipes.component.html',
  styleUrls: ['./dessert-recipes.component.css']
})
export class DessertRecipesComponent {
  isLoading: boolean = true;
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getAllDessertRecipes()
      .subscribe(recipes => {
        this.recipes = recipes;
        this.isLoading = false;
      });
  }
}
