import { Component } from '@angular/core';
import { Grocery } from './grocery.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public groceries: Grocery[] = [
    new Grocery('Apples', 5),
    new Grocery('Bananas', 3),
    new Grocery('Cherries', 10),
    new Grocery('Dates', 1),
    new Grocery('Elderberries', 2),
    new Grocery('Figs', 4)
  ]

  handleAddItem(newGrocery: Grocery) {
    this.groceries.push(newGrocery);
  }
}
