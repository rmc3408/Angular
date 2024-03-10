import { Injectable } from "@angular/core";
import { Grocery } from "../models/grocery.model";
import { Subject } from "rxjs";

@Injectable()
export class ShopService {
  private _groceries: Grocery[] = [
    new Grocery('Apples', 5200),
    new Grocery('Bananas', 3850),
    new Grocery('Cherries', 2150)
  ]
  ingAdded = new Subject<Grocery[]>();

  public get groceries() {
    return [...this._groceries];
  }

  handleAddItem(newGrocery: Grocery) {
    this._groceries.push(newGrocery);
    this.ingAdded.next(this._groceries);
  }

  addIngredients(ingredients: Grocery[]) {
    this._groceries.push(...ingredients);
    this.ingAdded.next(this.groceries);
  }
}