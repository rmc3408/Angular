import { EventEmitter, Injectable } from "@angular/core";
import { Grocery } from "../models/grocery.model";

@Injectable()
export class ShopService {
  private _groceries: Grocery[] = [
    new Grocery('Apples', 5200),
    new Grocery('Bananas', 3850),
    new Grocery('Cherries', 2150)
  ]
  ingAdded = new EventEmitter<Grocery[]>();

  public get groceries() {
    return [...this._groceries];
  }

  handleAddItem(newGrocery: Grocery) {
    this._groceries.push(newGrocery);
    this.ingAdded.emit(this._groceries);
  }

  addIngredients(ingredients: Grocery[]) {
    this._groceries.push(...ingredients);
    this.ingAdded.emit(this.groceries);
  }
}