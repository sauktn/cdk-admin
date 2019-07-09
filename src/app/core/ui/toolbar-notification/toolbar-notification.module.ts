import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarNotificationComponent } from './toolbar-notification.component'
import {
    PerfectScrollbarConfigInterface,
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar'
import { MatButtonModule, MatIconModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FullscreenModule } from '../fullscreen/fullscreen.module'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule, PerfectScrollbarModule, FullscreenModule],
    declarations: [ToolbarNotificationComponent],
    exports: [ToolbarNotificationComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class ToolbarNotificationModule {}
