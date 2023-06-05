import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  size = 40
  color = 'green'
  classes = ['red-title', 'small-title']
  isActive = true

  constructor() { }

  ngOnInit(): void {
  }

}
