import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar'
import { SidemenuComponent } from './sidemenu.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SidemenuItemModule } from '../sidemenu-item/sidemenu-item.module'
import { FullscreenModule } from '../fullscreen/fullscreen.module'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}
@NgModule({
    imports: [CommonModule, SidemenuItemModule, PerfectScrollbarModule, FullscreenModule, FlexLayoutModule],
    declarations: [SidemenuComponent],
    exports: [SidemenuComponent],
    providers: [
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ]
})
export class SidemenuModule {}
