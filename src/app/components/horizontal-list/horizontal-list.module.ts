import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HorizontalListComponent} from './horizontal-list.component';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [
        HorizontalListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CommonModule
    ],
    exports: [
        HorizontalListComponent
    ]
})
export class HorizontalListModule {
}
