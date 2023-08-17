import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-edit-recipe-page',
  templateUrl: './edit-recipe-page.component.html',
  styleUrls: ['./edit-recipe-page.component.css']
})
export class EditRecipePageComponent {
  isLoading: boolean = true;
  recipe?: Recipe;
  recipeId: string = '';

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = this.route.snapshot.paramMap.get('id') ?? '';
    if (!this.recipeId) {
      console.log(`Cannot find recipe to edit.`);
      return;
    }
    this.recipesService.getRecipeById(this.recipeId)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.isLoading = false;
      });
  }

  onSubmit({ name, description, imgUrl, category, ingredients, directions }: Recipe): void {
    this.recipesService.editRecipe(
        this.recipeId, name, description, imgUrl, category, ingredients, directions)
      .subscribe(() => this.router.navigateByUrl('/my-recipes'));
  }
}
