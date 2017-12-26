import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef
  } from '@angular/core'

import { CircleComponent } from '../circle/circle.component';
import { ShapeEnclosure } from '../shape';
  
  
  @Injectable()
  export class ShapeFactoryService {
    
    private rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) { }

    public setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
      this.rootViewContainer = viewContainerRef;
    }
  
    public addDynamicComponent() {
      const factory = this.factoryResolver.resolveComponentFactory(CircleComponent);

      let component = factory.create(this.rootViewContainer.parentInjector);

      let enclosure = new ShapeEnclosure(50, 50);
      component.instance.enclosure = enclosure;
      
      this.rootViewContainer.insert(component.hostView)
    }
}
  