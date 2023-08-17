import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.component.html',
  styleUrls: ['./recipe-detail-page.component.css']
})
export class RecipeDetailPageComponent {
  isLoading: boolean = true;
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      return;
    }
    this.recipesService.getRecipeById(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.isLoading = false;
      });
    this.recipesService.addViewToRecipe(id)
      .subscribe(() => console.log('View updated!'));
  }
}
