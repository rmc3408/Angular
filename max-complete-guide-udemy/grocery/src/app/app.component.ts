import { Component } from '@angular/core';
import { Recipe } from './shared/models/recipe.model';
import { RecipeService } from './shared/services/recipe.service';
import { ShopService } from './shared/services/shop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RecipeService, ShopService]
})
export class AppComponent {
  page: string = 'shop';

  onNavigate(evt: string) {
    this.page = evt;
  }
}
