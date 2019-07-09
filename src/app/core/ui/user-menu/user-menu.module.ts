import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule, MatButtonModule, MatIconModule, MatDividerModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FullscreenModule } from '../fullscreen/fullscreen.module'
import { UserMenuComponent } from './user-menu.component'

@NgModule({
    imports: [
        CommonModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule,
        MatDividerModule,
        FullscreenModule
    ],
    declarations: [UserMenuComponent],
    exports: [UserMenuComponent]
})
export class UserMenuModule {}
