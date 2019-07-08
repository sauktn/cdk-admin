import { Component, OnInit, ViewChild, DoCheck } from '@angular/core'
import { AgmMap } from '@agm/core'
import { MapsAPILoader } from '@agm/core'

@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, DoCheck {
    title = 'My first AGM project'
    lat = 10.025810237149164
    lng = 76.31248180688476
    zoom = 8
    height = '500px'
    @ViewChild(AgmMap) private myMap: any
    @ViewChild('mapContainer') mapContainer: any
    constructor(private mapsAPILoader: MapsAPILoader) {}

    ngOnInit() {
        setTimeout(() => {
            console.log(this.mapContainer.nativeElement.offsetHeight)
            // let h = this.mapContainer.nativeElement.offsetHeight - 10;
            // this.height = String(h) + 'px';
        }, 300)
    }
    ngDoCheck() {
        // let h = this.mapContainer.nativeElement.offsetHeight - 10;
        // this.height = String(h) + 'px';
    }
}
