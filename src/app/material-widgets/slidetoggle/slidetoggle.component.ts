import { Component, OnInit } from '@angular/core'
import { SLIDETOGGLE_HELPERS } from './helpers.data'

@Component({
    selector: 'app-slidetoggle',
    templateUrl: './slidetoggle.component.html',
    styleUrls: ['./slidetoggle.component.scss']
})
export class SlidetoggleComponent implements OnInit {
    color = 'accent'
    checked = false
    disabled = false
    slidetoggleHelpers: any = SLIDETOGGLE_HELPERS

    constructor() {}

    ngOnInit() {}
}
