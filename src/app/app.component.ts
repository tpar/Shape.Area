import { Component, ViewChild } from '@angular/core';
import { ShapeEnclosure } from '../shapes/shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'app';
  ecl = new ShapeEnclosure(5, 5);
}
