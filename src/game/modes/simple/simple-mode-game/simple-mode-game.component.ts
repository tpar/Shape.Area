import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ShapeEnclosure, ShapeType } from '../../../../shapes/shape';

@Component({
    moduleId: module.id,
    selector: 'simple-mode-game',
    templateUrl: 'simple-mode-game.component.html',
    styleUrls: ['simple-mode-game.component.scss']
})

export class SimpleModeGameComponent implements OnInit {

    enclosure: ShapeEnclosure = new ShapeEnclosure(50, 50);

    ngOnInit() {
    }
}
