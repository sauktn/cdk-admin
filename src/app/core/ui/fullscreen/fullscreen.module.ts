import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FullscreenComponent } from './fullscreen.component'
import { MatButtonModule, MatIconModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule],
    exports: [FullscreenComponent],
    declarations: [FullscreenComponent]
})
export class FullscreenModule {}
