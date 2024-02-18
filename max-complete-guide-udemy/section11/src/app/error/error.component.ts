import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  message: string = 'An unknown error occurred!';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //this.message = this.route.snapshot.data['message'];
    this.route.data.subscribe(data => {
      this.message = data['message'];
    });
  }
}
