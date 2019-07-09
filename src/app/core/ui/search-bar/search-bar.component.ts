import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {
    public bigMenu
    destroy$: Subject<void> = new Subject()
    @Input() open
    constructor() {}

    ngOnInit() {}
    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
