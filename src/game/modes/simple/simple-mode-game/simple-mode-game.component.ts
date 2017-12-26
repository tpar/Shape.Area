import { Component, ViewContainerRef } from '@angular/core';
import { ShapeEnclosure, ShapeType } from '../../../../shapes/shape';
import { ShapeFactoryService } from '../../../../shapes/factory/shape-factory';

@Component({
    moduleId: module.id,
    selector: 'simple-mode-game',
    templateUrl: 'simple-mode-game.component.html',
    styleUrls: ['simple-mode-game.component.scss']
})

export class SimpleModeGameComponent {
    ecl: ShapeEnclosure = new ShapeEnclosure(25, 25);

    constructor (service: ShapeFactoryService, viewContainerRef: ViewContainerRef) {
        
        service.setRootViewContainerRef(viewContainerRef);

        service.addShape(ShapeType.Triangle);
    }
}
