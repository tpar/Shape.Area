import { Component } from '@angular/core';
import { Shape, ShapeEnclosure } from '../shape';

@Component({
    moduleId: module.id,
    selector: 'circle',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.scss']
})


export class CircleComponent {


    constructor(private radius: number) {

    }

}
