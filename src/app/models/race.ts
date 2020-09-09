import { Card } from './card';

export class Race {
  map: Card[][] = [];
  size: number = 5;
  winner: Card;

  constructor() {

    this.map[0] = [];
    for (let i = 0; i <= this.size; i++) {
      this.map[0].push(Card.getFence());
    }
    for (let j = 1; j <= 4; j++) {
      this.map[j] = [new Card(j, 11)];
      for (let i = 0; i < this.size; i++) {
        this.map[j].push(Card.getEmptyCard());
      }
    }
  }

  moveHorse(j: number) {
    let last = this.map[j][this.size];
    if (last.index != 11) {
      this.map[j].pop();
      this.map[j].unshift(last);
      return false;
    } else {
      this.winner = last;
    }
    return true;
  }

  getWinningHorse(): Card {
    // let winner;
    // let winnerPosition;
    // for (let j = 1; j <= 4; j++) {
    //   for (let i = 0; i < this.size; i++) {
    //     let card = this.map[j][i];
    //     if(card.index == 11){
    //       if(!winner || winnerPosition < i) {
    //         winner = card;
    //         winnerPosition = i;
    //       }
    //       break;
    //     }
    //   }
    // }
    return this.winner;
  }
}
