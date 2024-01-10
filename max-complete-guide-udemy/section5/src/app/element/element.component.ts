import { Component, Input } from '@angular/core';
import { ServerElement } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './element.component.html'
})
export class ElementComponent {
  @Input('aliasElement') element: ServerElement;
  @Input() name: string = '';
}
