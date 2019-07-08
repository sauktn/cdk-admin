import { Component, OnInit } from '@angular/core'
import { MENU_HELPERS } from './helpers.data'

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menuHelpers: any = MENU_HELPERS
    constructor() {}
    ngOnInit() {}
}
