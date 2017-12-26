import { Component, Input, OnInit } from '@angular/core';
import { ShapeEnclosure, Shape } from '../shape';

@Component({
    moduleId: module.id,
    selector: 'triangle-component',
    templateUrl: 'triangle.component.html',
    styleUrls: ['triangle.component.scss']
})


export class TriangleComponent implements OnInit, Shape {
    @Input() enclosure: ShapeEnclosure;

    base: number;
    height: number;
    area: number;

    ngOnInit() {
        this.init();
    }

    private init() {
        this.setDimensions();
        this.calculateArea();
    }

    private setDimensions() {
        this.base = this.enclosure.breadth;
        this.height = this.enclosure.length;
    }

    private calculateArea() {
        this.area = 0.5 * this.base * this.height;
    }

}
