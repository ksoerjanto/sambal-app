import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { EditRecipePageComponent } from './components/edit-recipe-page/edit-recipe-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyRecipesPageComponent } from './components/my-recipes-page/my-recipes-page.component';
import { NewRecipePageComponent } from './components/new-recipe-page/new-recipe-page.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { DessertRecipesComponent } from './components/dessert-recipes/dessert-recipes.component';
import { FoodRecipesComponent } from './components/food-recipes/food-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'desserts', component: DessertRecipesComponent },
  { path: 'food', component: FoodRecipesComponent },
  { path: 'recipes', component: RecipesPageComponent, pathMatch: 'full' },
  { path: 'recipes/:id', component: RecipeDetailPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'my-recipes', component: MyRecipesPageComponent },
  { path: 'new-recipe', component: NewRecipePageComponent },
  { path: 'edit-recipe/:id', component: EditRecipePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
