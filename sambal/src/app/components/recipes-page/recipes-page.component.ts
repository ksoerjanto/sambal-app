import { Component, Input } from '@angular/core';
import { Recipe } from '../../types';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent {
  @Input() recipes: Recipe[] = [];
}
