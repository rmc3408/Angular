import { Component } from '@angular/core';
import { Grocery } from '../shared/models/grocery.model';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  public groceries: Grocery[] = []

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.groceries = this.shopService.groceries;
    this.shopService.ingAdded.subscribe((updated: Grocery[]) => this.groceries = updated);
  }
}
