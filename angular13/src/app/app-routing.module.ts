import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { OneComponent } from './components/one/one.component';

const routes: Routes = [
  { path: '', component: DirectivesComponent },
  { path: 'list', component: ListComponent },
  { path: 'one/:id', component: OneComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
