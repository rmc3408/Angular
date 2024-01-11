import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  public chooseRecipe: Recipe;
  
  getRecipe(evt: Recipe) {
    this.chooseRecipe = evt;
  }
}
