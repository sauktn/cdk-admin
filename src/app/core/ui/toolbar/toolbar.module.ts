import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from './toolbar.component'
import { MatToolbarModule, MatButtonModule, MatIconModule } from '@angular/material'
import { SearchBarModule } from '../search-bar/search-bar.module'
import { FullscreenModule } from '../fullscreen/fullscreen.module'
import { ToolbarNotificationModule } from '../toolbar-notification/toolbar-notification.module'
import { FlexLayoutModule } from '@angular/flex-layout'
import { UserMenuModule } from '../user-menu/user-menu.module'

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        SearchBarModule,
        FullscreenModule,
        ToolbarNotificationModule,
        UserMenuModule,
        FlexLayoutModule
    ],
    declarations: [ToolbarComponent],
    exports: [ToolbarComponent]
})
export class ToolbarModule {}
