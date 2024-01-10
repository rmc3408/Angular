import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Recipe A contains Plant', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/12/plant-based-recipes-1-580x791.jpg'),
    new Recipe('B Test Recipe', 'Recipe B contains Meat', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-beef-recipes-536cd86.jpg'),
  ];
}
