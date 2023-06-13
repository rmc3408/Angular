import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./posts/list/list.component";
import { CreateComponent } from "./posts/create/create.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: CreateComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
