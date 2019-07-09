import { Component, OnInit, Input, HostListener, ElementRef, OnDestroy } from '@angular/core'
import { Subject } from 'rxjs/Subject'

@Component({
    selector: 'app-toolbar-notification',
    templateUrl: './toolbar-notification.component.html',
    styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit, OnDestroy {
    cssPrefix = 'toolbar-notification'
    destroy$!: Subject<void>
    isOpen = false
    @Input() notifications = []

    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {}

    ngOnDestroy(): void {
        this.destroy$.next()
        this.destroy$.complete()
    }

    select() {}

    delete(notification) {}
}
