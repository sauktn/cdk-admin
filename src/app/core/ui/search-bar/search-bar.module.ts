import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatInputModule, MatFormFieldModule } from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout'
import { SearchBarComponent } from './search-bar.component'
import { FullscreenModule } from '../fullscreen/fullscreen.module'

@NgModule({
    imports: [CommonModule, FullscreenModule, MatInputModule, MatFormFieldModule, FlexLayoutModule],
    exports: [SearchBarComponent],
    declarations: [SearchBarComponent]
})
export class SearchBarModule {}
