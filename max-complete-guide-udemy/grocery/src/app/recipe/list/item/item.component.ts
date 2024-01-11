import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() public recipe: Recipe;
  @Output() public recipeSelectedEvt: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  handleDetail() {
    this.recipeSelectedEvt.emit(this.recipe);
  }
}
