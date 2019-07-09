import { Component, OnInit, Input, HostListener, ElementRef, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit, OnDestroy {
    destroy$!: Subject<void>
    isOpen = false

    // currentUser = null
    Hari

    @Input() currentUser = null
    @HostListener('document:click', ['$event', '$event.target'])
    onClick(event: MouseEvent, targetElement: HTMLElement) {
        if (!targetElement) {
            return
        }

        const clickedInside = this.elementRef.nativeElement.contains(targetElement)
        if (!clickedInside) {
            this.isOpen = false
        }
    }

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }
}
