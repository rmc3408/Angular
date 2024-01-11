import { Component, EventEmitter, Output } from '@angular/core';

type Time = number;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Output() startGame = new EventEmitter<Time>();
  @Output() endGame = new EventEmitter<Time>();
  public time: number = 0;
  protected timerInterval: NodeJS.Timeout;

  onStartGame() {
    this.timerInterval = setInterval(() => {
      this.time++;
      this.startGame.emit(this.time);
    }, 1000);
  }

  onPauseGame() {
    clearInterval(this.timerInterval);
    this.time = 0;
    this.endGame.emit(this.time);
  }
}
