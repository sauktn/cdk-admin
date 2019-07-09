import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { menus } from './menu-element'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit, OnDestroy {
    @Input() iconOnly = false
    destroy$: Subject<void> = new Subject()
    public menus = menus

    constructor() {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
