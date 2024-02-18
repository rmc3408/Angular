import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShopComponent } from './shop/shop.component';
import { ListComponent } from './recipe/list/list.component';
import { DetailComponent } from './recipe/detail/detail.component';
import { ItemComponent } from './recipe/list/item/item.component';
import { EditComponent } from './shop/edit/edit.component';
import { AppComponent } from './app.component';
import { RecipeNoneSelectedComponent } from './recipe/home/home.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recipe', component: RecipeComponent,
    children: [
      { path: '', component: RecipeNoneSelectedComponent },
      { path: ':id', component: DetailComponent },
    ]
  },
  { path: 'shop', component: ShopComponent }
];

export const declarationMainApp = [
  RecipeComponent,
  ShopComponent,
  DetailComponent,
  ListComponent,
  RecipeNoneSelectedComponent,
  ItemComponent,
  EditComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
