import { Component, ViewContainerRef } from '@angular/core';
import { ShapeEnclosure, ShapeType } from '../../../shapes/shape';
import { ShapeFactoryService } from '../../../shapes/factory/shape-factory';

@Component({
    moduleId: module.id,
    selector: 'random-shape-simple',
    templateUrl: 'random-shape-simple.component.html',
    styleUrls: ['random-shape-simple.component.scss']
})
export class RandomShapeSimpleComponent {
    
    constructor (service: ShapeFactoryService, viewContainerRef: ViewContainerRef) {
        service.setRootViewContainerRef(viewContainerRef);
        service.addShape(this.getRandomShapeType());
    }

    private getRandomShapeType(): ShapeType {
        const enumValues = Object.keys(ShapeType)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n));

        const randomIndex = this.getRandomInt(0, enumValues.length)
        
        return enumValues[randomIndex]
            
    }

    private getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
}



