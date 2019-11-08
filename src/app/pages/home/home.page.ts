import {Component} from '@angular/core';
import {routes} from "../../app-routing.module";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    routes = routes.filter(opt => (!opt.redirectTo && opt.path !== 'home'));

    constructor() {
    }

}
