import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HorizontalListPage} from './horizontal-list.page';
import {HorizontalListModule} from '../../components/horizontal-list/horizontal-list.module';

const routes: Routes = [
    {
        path: '',
        component: HorizontalListPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HorizontalListModule,
        RouterModule.forChild(routes)
    ],
    declarations: [HorizontalListPage]
})
export class HorizontalListPageModule {
}
