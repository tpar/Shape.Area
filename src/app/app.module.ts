import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {SimpleModeGameComponent} from '../game/modes/simple/simple-mode-game/simple-mode-game.component';
import {CircleComponent} from '../shapes/circle/circle.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleModeGameComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
