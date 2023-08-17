import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { environment } from '../environments/environments';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { EditRecipePageComponent } from './components/edit-recipe-page/edit-recipe-page.component';
import { DessertRecipesComponent } from './components/dessert-recipes/dessert-recipes.component';
import { FoodRecipesComponent } from './components/food-recipes/food-recipes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyRecipesPageComponent } from './components/my-recipes-page/my-recipes-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NewRecipePageComponent } from './components/new-recipe-page/new-recipe-page.component';
import { RecipeDataFormComponent } from './components/recipe-data-form/recipe-data-form.component';
import { RecipeDetailPageComponent } from './components/recipe-detail-page/recipe-detail-page.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DessertRecipesComponent,
    FoodRecipesComponent,
    RecipesPageComponent,
    RecipeDetailPageComponent,
    AboutPageComponent,
    NewRecipePageComponent,
    EditRecipePageComponent,
    MyRecipesPageComponent,
    RecipeDataFormComponent,
    NavBarComponent,
    HomePageComponent,
    CardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth(getApp())),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
