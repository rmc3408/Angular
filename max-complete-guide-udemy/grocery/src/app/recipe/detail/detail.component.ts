import { Component, Input } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  addToBuy() {
    this.recipeService.addIngredientToGroceryList(this.recipe.ingredients);
  }
}
