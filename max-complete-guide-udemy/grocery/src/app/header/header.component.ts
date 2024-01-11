import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() pageRouterEvent = new EventEmitter<string>();
  pathname: string = 'shop';

  onSelectPage(path: string) {
    this.pageRouterEvent.emit(path);
    this.pathname = path;
  }
}