import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './recipe/list/list.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { ItemComponent } from './recipe/list/item/item.component';
import { EditComponent } from './shop/edit/edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    RecipeComponent,
    ListComponent,
    DetailComponent,
    ItemComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
