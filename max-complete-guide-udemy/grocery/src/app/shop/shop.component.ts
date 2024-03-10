import { Component, OnDestroy, OnInit } from '@angular/core';
import { Grocery } from '../shared/models/grocery.model';
import { ShopService } from '../shared/services/shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit, OnDestroy {
  private ingAddedSub: Subscription;
  public groceries: Grocery[] = []

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.groceries = this.shopService.groceries;
    this.ingAddedSub = this.shopService.ingAdded.subscribe((updated: Grocery[]) => this.groceries = updated);
  }

  ngOnDestroy() {
    this.ingAddedSub.unsubscribe();
  }
}
