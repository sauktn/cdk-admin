import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-sidemenu-item',
    templateUrl: './sidemenu-item.component.html',
    styleUrls: ['./sidemenu-item.component.scss']
})
export class SidemenuItemComponent implements OnInit, OnDestroy {
    @Input() menu
    @Input() iconOnly: boolean
    @Input() secondaryMenu = false
    destroy$: Subject<void> = new Subject()

    constructor() {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }

    openLink() {
        this.menu.open = this.menu.open
    }

    chechForChildMenu() {
        return this.menu && this.menu.sub ? true : false
    }
}
