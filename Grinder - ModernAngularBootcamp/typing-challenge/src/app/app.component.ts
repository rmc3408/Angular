import { Component } from '@angular/core';
import { lorem } from 'faker';

const rndSentence = lorem.sentence();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-challenge';
  randomText = rndSentence;
  text = '';
  isWinner = false;

  onTyping(evt: any) {
    //console.log("texting...");
    //console.log(evt);
    //console.log(this.text);
    //this.text = evt.target.value;
    if (evt === this.randomText) {
      this.isWinner = true;
    }
    else {
      this.isWinner = false;
    }
    this.text = evt;
  }
  onCheckColor() {
    console.log('clor');
  }

}
