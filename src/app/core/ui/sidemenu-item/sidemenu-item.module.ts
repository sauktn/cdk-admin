import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatListModule, MatIconModule, MatChipsModule } from '@angular/material'
import { SidemenuItemComponent } from './sidemenu-item.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FullscreenModule } from '../fullscreen/fullscreen.module'
import { RouterModule } from '@angular/router'
// import { SidemenuModule } from '../sidemenu/sidemenu.module'

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MatIconModule,
        MatChipsModule,
        FlexLayoutModule,
        FullscreenModule
        // SidemenuModule
    ],
    declarations: [SidemenuItemComponent],
    exports: [SidemenuItemComponent]
})
export class SidemenuItemModule {}
