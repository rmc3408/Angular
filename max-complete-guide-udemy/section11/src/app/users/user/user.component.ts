import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  evtSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.evtSubscription = this.route.params.subscribe(params => {
      this.user = {
        id: params['id'],
        name: params['name']
      };
    })

    // ROUTE.SNAPSHOT - Get ID data only once from URL and but cannot redirect 
    // console.log(this.route.snapshot.params['id']);
    // this.user = {
    //   id: this.route.snapshot.params['id'],
    //   name: 'Max'
    // }
  }

  ngOnDestroy(): void {
    this.evtSubscription.unsubscribe(); // only use if not angular observable
  }

}
