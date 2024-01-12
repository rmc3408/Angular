import { Component } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  public choosenRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedEvt.subscribe((recipe: Recipe) => this.choosenRecipe = recipe);
  }
}
