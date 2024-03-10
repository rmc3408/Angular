import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  protected userId: string = '';
  private subCustomObs: Subscription;

  ngOnInit() {

    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        
        if (count === 6) {
          observer.complete();
        }
        if (count > 7) {
          observer.error(new Error('Count is 5!'));
        }

        observer.next(count);
        count++;
      }, 1000);
    });

    this.subCustomObs = customObs.pipe(
      filter((item: number) => item % 2 == 0), 
      map((item: number) => `Round ${item}`)
      ).subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Completed!');
    }
    );


  }

  ngOnDestroy() {
    this.subCustomObs.unsubscribe();
  }

}
