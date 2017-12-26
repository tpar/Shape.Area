// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SimpleModeGameComponent } from './simple-mode-game.component';

import {CircleComponent} from '../../../../shapes/circle/circle.component';


@NgModule({
    imports: [
    ],
    declarations: [
        SimpleModeGameComponent
    ],
    exports: [
        SimpleModeGameComponent,
    ],
    bootstrap:[SimpleModeGameComponent]
})
export class SimpleModeGameModule {

}
