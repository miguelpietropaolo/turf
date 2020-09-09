import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';
import { Howl } from 'howler';

@Component({
  selector: 'modal-winner',
  templateUrl: './modal-winner.component.html',
  styleUrls: ['./modal-winner.component.css']
})
export class ModalWinnerComponent implements OnInit {
  @Input("model") model: Card;
  @Output() modelChange = new EventEmitter();

  winnerSong = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Por_una_cabeza_carlos_gardel.ogg";
  sound: Howl;

  constructor() {
    this.sound = new Howl({ src: [this.winnerSong], html5 :true });
   }

  ngOnInit() {
    this.sound.play();
  }

  close(){
    this.sound.stop();
    this.model = null;
    this.modelChange.emit(this.model);
  }
}
