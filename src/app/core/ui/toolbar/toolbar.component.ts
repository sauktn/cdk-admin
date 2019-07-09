import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { ToolbarHelpers } from './toolbar.helpers'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
    @Input() sidenav
    @Input() sidebar
    @Input() drawer
    @Input() matDrawerShow
    destroy$: Subject<void> = new Subject()
    searchOpen = false
    toolbarHelpers = ToolbarHelpers
    constructor() {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
