import { Component, ElementRef, ViewChild } from '@angular/core';
import { Grocery } from '../../shared/models/grocery.model';
import { ShopService } from '../../shared/services/shop.service';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shopService: ShopService) { }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newGrocery = new Grocery(name, amount);
    this.shopService.handleAddItem(newGrocery);
  }

}
