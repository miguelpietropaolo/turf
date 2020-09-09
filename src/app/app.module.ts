import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ModalWinnerComponent } from './modal-winner/modal-winner.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ModalWinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
