import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {SimpleModeGameComponent} from '../game/modes/simple/simple-mode-game/simple-mode-game.component';
import {CircleComponent} from '../shapes/circle/circle.component';
import { TriangleComponent } from '../shapes/triangle/triangle.component';
import { ShapeFactoryService } from '../shapes/factory/shape-factory';


@NgModule({
  declarations: [
    AppComponent,
    SimpleModeGameComponent,
    CircleComponent,
    TriangleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ShapeFactoryService
  ],
  entryComponents: [
    CircleComponent,
    TriangleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
