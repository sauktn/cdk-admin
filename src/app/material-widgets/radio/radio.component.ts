import { Component, OnInit } from '@angular/core'
import { RADIO_HELPERS } from './helpers.data'

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
    favoriteSeason: string

    seasons = ['Winter', 'Spring', 'Summer', 'Autumn']

    radioHelpers: any = RADIO_HELPERS
    constructor() {}

    ngOnInit() {}
}
