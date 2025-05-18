import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  letters = false;
  numbers = false;
  symbols = false;
  lengths = 0;
  

  // getPassword() {
  //   return this.password;
  // }
  onButtonClick() {
    //console.log(`${this.letters},${this.numbers},${this.symbols},${this.lengths}`);

    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.letters) {
      validChars += letters;
    }
    if (this.numbers) {
      validChars += numbers;
    }
    if (this.symbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.lengths; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
  

  onChangeLetters() {
    //console.log('Checkbox letters clicked!');
    this.letters = !this.letters;
    //console.log(this.letters);
  }
  onChangeNumbers() {
    //console.log('Checkbox numbers clicked!');
    this.numbers = !this.numbers;
    //console.log(this.numbers);
  }
  onChangeSymbols() {
    //console.log('Checkbox symbols clicked!');
    this.symbols = !this.symbols;
    //console.log(this.symbols);
  }
  onChangeLength(value: string) {
    const convertedNum = parseInt(value);
    if (!isNaN(convertedNum)) {
      this.lengths = convertedNum;
    }


  }
}
