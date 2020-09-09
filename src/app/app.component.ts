import { Component } from '@angular/core';
import { Card } from './models/card';
import { Race } from './models/race';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'horse-racing';
  started: boolean;
  last: Card;
  winner: Card;
  deck: Card[] = [];
  race: Race;

  constructor() {
    this.init();
  }

  init() {
    this.generateDeck();
    this.deck = this.shuffle(this.deck);
    this.race = new Race();
    this.last = Card.getFence();
    this.started = true;
  }

  pickCard() {
    if (!this.started) {
      this.init();
    }
    else {
      this.last = this.deck[this.deck.length - 1];
      this.deck.pop();
      if (this.race.moveHorse(this.last.suit)) {
        this.started = false;
        this.winner = this.race.getWinningHorse();
      }
    }
  }

  private generateDeck() {
    for (let j = 1; j <= 4; j++) {
      for (let i = 1; i <= 12; i++) {
        let card = new Card(j, i);
        if (i != 11) {
          this.deck.push(card);
        }
      }
    }
  }

  transpose(a) {

    // Calculate the width and height of the Array
    var w = a.length || 0;
    var h = a[0] instanceof Array ? a[0].length : 0;

    // In case it is a zero matrix, no transpose routine needed.
    if (h === 0 || w === 0) { return []; }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for (i = 0; i < h; i++) {

      // Insert a new row (array)
      t[i] = [];

      // Loop through every item per item in outer array (width)
      for (j = 0; j < w; j++) {

        // Save transposed data.
        t[i][j] = a[j][i];
      }
    }

    return t;
  }

  private shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
