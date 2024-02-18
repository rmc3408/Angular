import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

type ReturnCanActivate = boolean | Promise<boolean> | Observable<boolean>;

export const urlGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): ReturnCanActivate => {
  // This inject replace contructor dependency injection
  const authService = inject(AuthService);
  return authService.isAuthenticatedUrl(state.url) //by URL
};

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
): ReturnCanActivate => {
  // This inject replace contructor dependency injection
  const authService = inject(AuthService);
  return authService.isAuthenticated()
};