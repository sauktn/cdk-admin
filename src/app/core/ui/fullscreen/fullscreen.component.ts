import { Component, OnInit, OnDestroy } from '@angular/core'
import * as screenfull from 'screenfull'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-fullscreen',
    templateUrl: './fullscreen.component.html',
    styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject()
    isFullscreen = false
    constructor() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }

    ngOnInit() {}

    toggleFullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle()
            this.isFullscreen = !this.isFullscreen
        }
    }
}
