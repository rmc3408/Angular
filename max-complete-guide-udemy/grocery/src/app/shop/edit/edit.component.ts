import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Grocery } from '../grocery.model';

@Component({
  selector: 'app-shop-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<{name: string, amount: number}>();

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newGrocery = new Grocery(name, amount);
    this.itemAdded.emit(newGrocery);
  }

}
