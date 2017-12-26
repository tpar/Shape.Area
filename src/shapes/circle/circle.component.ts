import { Component, Input, OnInit } from '@angular/core';
import { Shape, ShapeEnclosure } from '../shape';
import { InequalBoundaryException } from '../shape-exception';

@Component({
    moduleId: module.id,
    selector: 'circle-component',
    templateUrl: 'circle.component.html',
    styleUrls: ['circle.component.scss']
})


export class CircleComponent implements OnInit, Shape {

    @Input() enclosure: ShapeEnclosure;

    area: number;
    radius: number;

    rad1: "5";
    rad2=5;

    ngOnInit() {
       this.init(); 
    }

    private init() {
        this.setRadius();
        this.calculateArea();
    }

    private setRadius() {
        this.radius = 0.5 * this.enclosure.length;
    }

    private calculateArea() {

        if (this.enclosure.length !== this.enclosure.breadth) {
            throw new InequalBoundaryException(this.enclosure);
        }

        this.area = Math.PI * Math.pow(this.radius, 2);
    }

}
