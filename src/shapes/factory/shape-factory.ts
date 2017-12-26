import {
		ComponentFactoryResolver,
		Injectable,
		Inject,
		ReflectiveInjector,
		ViewContainerRef
	} from '@angular/core'

import { CircleComponent } from '../circle/circle.component';
import { ShapeEnclosure, ShapeType } from '../shape';
import { TriangleComponent } from '../triangle/triangle.component';
	
	
	@Injectable()
	export class ShapeFactoryService {
		
		private rootViewContainer: ViewContainerRef;

		constructor(private factoryResolver: ComponentFactoryResolver) { }

		public setRootViewContainerRef(viewContainerRef: ViewContainerRef) {
			this.rootViewContainer = viewContainerRef;
		}

		public addShape(shape: ShapeType) {
			const factory = this.getComponentFactoryFor(shape);

			let component = factory.create(this.rootViewContainer.parentInjector);

			let enclosure = new ShapeEnclosure(50, 50);
			component.instance.enclosure = enclosure;
			
			this.rootViewContainer.insert(component.hostView)
		}

		private getComponentFactoryFor(shape: ShapeType) {
			switch(shape) {
				case ShapeType.Circle:
					return this.factoryResolver.resolveComponentFactory(CircleComponent);
				
				case ShapeType.Triangle:
					return this.factoryResolver.resolveComponentFactory(TriangleComponent);
				
				default:
					return null;
			}
		}
}
	