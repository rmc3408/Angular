import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  protected userId: string = '';
  
  constructor(private userService: UserService) { }


  ngOnInit() {
    this.userService.user.subscribe((id: string) => {
      this.userId = id;
    });
  }


}
