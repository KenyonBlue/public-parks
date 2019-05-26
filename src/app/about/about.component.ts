import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public parks = [];

  constructor(private _parkService: DataService) { }

  ngOnInit() {
     this._parkService.getParks()
     .subscribe(data => {
      this.parks = data
      console.log(this.parks);
    });
  }


  // title: string = 'Angular Parks API Code Challenge';
  // lat: number = 36.8508;
  // lng: number = -76.2859;

   // google maps zoom level
   zoom: number = 8;
  
   // initial center position for the map
   lat: number = 36.8508;
   lng: number = -76.2859;
 
   clickedMarker(label: string, index: number) {
     console.log(`clicked the marker: ${label || index}`)
   }
   
   mapClicked($event: MouseEvent) {
     this.markers.push({
       lat: $event.coords.lat,
       lng: $event.coords.lng,
       draggable: true
     });
   }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }
   
   markers: marker[] = [
     {
       lat: 51.673858,
       lng: 7.815982,
       label: 'A',
       draggable: true
     },
     {
       lat: 51.373858,
       lng: 7.215982,
       label: 'B',
       draggable: false
     },
     {
       lat: 51.723858,
       lng: 7.895982,
       label: 'C',
       draggable: true
     },
     
   ]
 }
 
 // just an interface for type safety.
 interface marker {
   lat: number;
   lng: number;
   label?: string;
   draggable: boolean;

  

}
