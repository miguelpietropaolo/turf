import { Card } from './card';

export class Race {
  map: Card[][] = [];

  constructor(size: number) {

    this.map[0] = [];
    for (let i = 0; i <= size; i++) {
      this.map[0].push(Card.getFence());
    }
    for (let j = 1; j <= 4; j++) {
      this.map[j] = [new Card(j, 11)];
      for (let i = 0; i < size; i++) {
        this.map[j].push(Card.getEmptyCard());
      }
    }
  }
}
