import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public readonly name: string = 'Ontario Street'
  public readonly postalCode: string = 'M4X 1N2'


  constructor() { }

  ngOnInit(): void {
  }

}
