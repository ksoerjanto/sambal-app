import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Recipe } from '../../types';

@Component({
  selector: 'app-recipe-data-form',
  templateUrl: './recipe-data-form.component.html',
  styleUrls: ['./recipe-data-form.component.css']
})
export class RecipeDataFormComponent {
  @Input() buttonText: string = 'Create Recipe';
  @Input() currentName: string = '';
  @Input() currentDescription: string = '';
  @Input() currentImgUrl = '';
  @Input() currentCategory = Category.FOOD;
  @Input() currentIngredients = '';
  @Input() currentDirections = '';

  categoryEnum = Category;
  enumKeys: string[] = [];

  name: string = '';
  description: string = '';
  imgUrl: string = '';
  category: Category = Category.FOOD;
  ingredients: string = '';
  directions: string = '';

  @Output() onSubmit = new EventEmitter<Recipe>();
  
  constructor(private router: Router) {
    this.enumKeys = Object.values(this.categoryEnum);
  }

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.imgUrl = this.currentImgUrl;
    this.category = this.currentCategory;
    this.ingredients = this.currentIngredients;
    this.directions = this.currentDirections;
  }

  onButtonClicked(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      imgUrl: this.imgUrl,
      category: this.category,
      ingredients: this.ingredients,
      directions: this.directions
    });
  }
}
