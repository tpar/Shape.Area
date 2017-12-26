import { Component } from '@angular/core';
import { ShapeEnclosure } from '../../../../shapes/shape';

@Component({
    moduleId: module.id,
    selector: 'simple-mode-game',
    templateUrl: 'simple-mode-game.component.html',
    styleUrls: ['simple-mode-game.component.scss']
})
export class SimpleModeGameComponent {
    ecl: ShapeEnclosure = new ShapeEnclosure(25, 25);
}
