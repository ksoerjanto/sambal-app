import { Component } from '@angular/core';
import { Category, Recipe } from '../../types';
import { RecipesService } from '../../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe-page',
  templateUrl: './new-recipe-page.component.html',
  styleUrls: ['./new-recipe-page.component.css']
})
export class NewRecipePageComponent {

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {}

  onSubmit({ name, description, imgUrl, category, ingredients, directions }: Recipe): void {
    this.recipesService.createNewRecipe(
        name, description, imgUrl, category, ingredients, directions)
      .subscribe(() => {
        this.router.navigateByUrl('/my-recipes');
      })
  }
}
