import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, urlGuard } from './app.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { ServerResolver } from './servers/servers.resolver';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorComponent, data: { message: 'Page not found!' }},
  {
    path: 'users', component: UsersComponent,
    children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },
  {
    path: 'servers', component: ServersComponent,
    canActivate: [authGuard],
    canActivateChild: [urlGuard],
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver }},
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  { path: '**', redirectTo: '/not-found' }
];

export const routeComponents = [
  HomeComponent,
  UsersComponent,
  ServersComponent,
  UserComponent,
  EditServerComponent,
  ServerComponent,
  PageNotFoundComponent,
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes) ],
  exports: [RouterModule]
})
export class AppRoutingModule {}