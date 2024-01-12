import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() public recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  onSelection() {
    this.recipeService.selectedEvt.emit(this.recipe);
  }
}
