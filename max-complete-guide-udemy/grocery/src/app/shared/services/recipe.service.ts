import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../models/recipe.model";
import { Grocery } from "../models/grocery.model";
import { ShopService } from "./shop.service";

@Injectable()
export class RecipeService {
  private _recipes: Recipe[] = [
    new Recipe('A Recipe', 'Recipe A contains Plant', 'https://cdn.loveandlemons.com/wp-content/uploads/2020/12/plant-based-recipes-1-580x791.jpg',
    [ { name: 'Plant', amount: 1}, { name: 'Tofu', amount: 2}, { name: 'Onion', amount: 1}]),
    new Recipe('B Recipe', 'Recipe B contains Meat', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/roast-beef-recipes-536cd86.jpg',
    [ { name: 'Meat', amount: 1}, { name: 'Eggs', amount: 2}, { name: 'Cheese', amount: 1}]),
  ];
  public selectedEvt: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private groceryListService: ShopService) { }

  public get recipes() {
    return [...this._recipes];
  }

  public getRecipe(index: number) {
    return this._recipes[index];
  }

  public addIngredientToGroceryList(ingredients: Grocery[]) {
    this.groceryListService.addIngredients(ingredients)
  }
}