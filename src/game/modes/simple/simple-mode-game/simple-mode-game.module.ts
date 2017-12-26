// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SimpleModeGameComponent } from './simple-mode-game.component';

import {CircleComponent} from '../../../../shapes/circle/circle.component';
import { TriangleComponent } from '../../../../shapes/triangle/triangle.component';


@NgModule({
    imports: [
    ],
    declarations: [
        SimpleModeGameComponent
    ],
    exports: [
        SimpleModeGameComponent,
    ],
    entryComponents: [
        CircleComponent,
        TriangleComponent
    ],
    bootstrap:[SimpleModeGameComponent]
})
export class SimpleModeGameModule {

}
