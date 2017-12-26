import { Component } from '@angular/core';
import { Shape, ShapeEnclosure } from '../shape';
import { InequalBoundaryException } from '../shape-exception';

@Component({
    moduleId: module.id,
    selector: 'circle',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.scss']
})


export class CircleComponent implements Shape {

    public area: number = 0;
    public radius: number;

    constructor(private enclosure: ShapeEnclosure) {
        this.calculateArea();
    }

    private calculateArea() {
        if (this.enclosure.length !== this.enclosure.breadth) {
            throw new InequalBoundaryException(this.enclosure);
        }

        this.radius = 0.5 * this.enclosure.length;

        this.area = Math.PI * Math.pow(this.radius, 2);
    }

}
