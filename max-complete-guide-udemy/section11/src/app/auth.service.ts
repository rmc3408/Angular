import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  loggedIn = false;

  isAuthenticatedUrl(urlpath?: string) {
    const id = parseInt(urlpath?.split('/')[2].split('?')[0]);
    if (id <= 3) {
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated() {
    if (this.loggedIn) {
      return true;
    } else {
      return false;
    }
  }

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

}