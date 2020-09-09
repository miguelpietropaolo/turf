export class Card {
  suit: number;
  index: number;
  id: number;
  first: boolean;

  constructor(suit: number, index: number) {
    this.suit = suit;
    this.index = index;
    this.id = suit * index;
  }

  static getEmptyCard() {
    return  new Card(0, -1);
  }

  static getFence() {
    return  new Card(0, -2);
  }

}
