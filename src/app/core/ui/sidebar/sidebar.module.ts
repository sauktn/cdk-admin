import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from './sidebar.component'
import { MatListModule, MatTabsModule, MatProgressBarModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FullscreenModule } from '../fullscreen/fullscreen.module'

@NgModule({
    imports: [CommonModule, MatListModule, FlexLayoutModule, MatTabsModule, MatProgressBarModule, FullscreenModule],
    exports: [SidebarComponent],
    declarations: [SidebarComponent]
})
export class SidebarModule {}
