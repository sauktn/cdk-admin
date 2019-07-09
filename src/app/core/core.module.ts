import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatChipsModule } from '@angular/material/chips'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatTabsModule } from '@angular/material'
import { RouterModule } from '@angular/router'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar'
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatSidenavModule, MatSliderModule, MatProgressBarModule } from '@angular/material'
import { SidemenuItemModule } from './ui/sidemenu-item/sidemenu-item.module'
import { ToolbarNotificationModule } from './ui/toolbar-notification/toolbar-notification.module'
import { ToolbarModule } from './ui/toolbar/toolbar.module'
import { UserMenuModule } from './ui/user-menu/user-menu.module'
import { SidemenuModule } from './ui/sidemenu/sidemenu.module'
import { SearchBarModule } from './ui/search-bar/search-bar.module'
import { FullscreenModule } from './ui/fullscreen/fullscreen.module'
import { SidebarModule } from './ui/sidebar/sidebar.module'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}

@NgModule({
    imports: [
        CommonModule,
        FullscreenModule,
        SearchBarModule,
        SidebarModule,
        SidemenuModule,
        SidemenuItemModule,
        ToolbarModule,
        ToolbarNotificationModule,
        UserMenuModule,
        MatListModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatChipsModule,
        RouterModule,
        PerfectScrollbarModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatTabsModule,
        MatSliderModule,
        MatProgressBarModule
    ],
    declarations: [],
    exports: [
        FullscreenModule,
        SearchBarModule,
        SidebarModule,
        SidemenuModule,
        SidemenuItemModule,
        ToolbarModule,
        ToolbarNotificationModule,
        UserMenuModule
    ],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class CoreModule {}
