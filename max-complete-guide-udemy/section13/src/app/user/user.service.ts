import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  //public user: EventEmitter<string> = new EventEmitter<string>();
  public user: Subject<string> = new Subject<string>();

  constructor() { }
  
}