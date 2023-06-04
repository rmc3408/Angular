import { Component, OnInit, Input } from '@angular/core';

type userDatatype = {
  name: string;
  age: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() userName: string = '';
  @Input() userData: userDatatype = { name: '', age: 0 };

  constructor() { }

  ngOnInit(): void {
  }

}
