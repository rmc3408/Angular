import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ServersService } from "./servers.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

type Server = {id: number, name: string, status: string};
type ResolverReturn<T> = Observable<T> | Promise<T> | T;

@Injectable()
export class ServerResolver implements Resolve<Server> {
  
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ResolverReturn<Server> {
    return this.serversService.getServer(+route.params['id']);
  }
}