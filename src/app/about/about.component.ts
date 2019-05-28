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


  title: string = 'National Parks';
  title1: string = 'Park Information';
  // lat: number = 36.8508;
  // lng: number = -76.2859;

   // google maps zoom level
   zoom: number = 8;
  
   // initial center position for the map
   lat: number = 39.0119;
   lng: number = -98.4842;
 
   clickedMarker(label: string, index: number, title: string) {
     console.log(`clicked the marker: ${label || index || title}`)
   }
   
  //  mapClicked($event: MouseEvent) {
  //    this.markers.push({
  //      lat: $event.coords.lat,
  //      lng: $event.coords.lng,
  //      draggable: true
  //    });
  //  }
   
   markerDragEnd(m: marker, $event: MouseEvent) {
     console.log('dragEnd', m, $event);
   }
   
   markers: marker[] = [
     {
       lat: 38.916554,
       lng: -77.025977,
       label: 'A',
       draggable: false,
       title: 'African American Civil War Memorial'
     },
     {
       lat: 33.5099067687988,
       lng: -82.0053787231445,
       label: 'B',
       draggable: false,
       title: 'Augusta Canal National Heritage Area'
     },
     {
       lat: 38.89231541,
       lng: -77.00381882,
       label: 'C',
       draggable: false,
       title: "Belmont-Paul Women's Equality National Monument"
     },
     {
      lat: 25.97079602,
      lng: -81.08120629,
      label: 'D',
      draggable: false,
      title: 'Big Cypress National Preserve' ,
    },
    // started the new complete list 
    {
      lat: 37.58399144,
      lng: -112.1826689,
      label: 'A',
      draggable: false,
      title: 'Bryce Canyon National Park'
    },
    {
      lat: 37.7951,
      lng: 84.5943,
      label: 'B',
      draggable: false,
      title: 'Camp Nelson National Monument'
    },
    {
      lat: 41.92381465,
      lng: -70.04319832,
      label: 'C',
      draggable: false,
      title: 'Cape Cod National Seashore'
    },
    {
     lat: 32.84577392,
     lng: -79.82487582,
     label: 'D',
     draggable: false,
     title: 'Charles Pinckney National Historic Site' ,
   },
   {
    lat: 41.26093905,
    lng: -81.57116722,
    label: 'A',
    draggable: false,
    title: 'Cuyahoga Valley National Park'
  },
  {
    lat: 24.64884965,
    lng: -82.87176297,
    label: 'B',
    draggable: false,
    title: 'Dry Tortugas National Park'
  },
  {
    lat: 43.08095081,
    lng: -91.19687517,
    label: 'C',
    draggable: false,
    title: 'Effigy Mounds National Monument'
  },
  {
   lat: 34.88422799,
   lng: -107.9950948,
   label: 'D',
   draggable: false,
   title: 'El Malpais National Monument' ,
 },
 {
   lat: 40.79689857,
   lng: -81.37579869,
   label: 'A',
   draggable: false,
   title: 'First Ladies National Historic Site'
 },
 {
   lat: 32.14925942,
   lng: -109.451132,
   label: 'B',
   draggable: false,
   title: 'Fort Bowie National Historic Site'
 },
 {
   lat: 30.59930381,
   lng: -103.8961904,
   label: 'C',
   draggable: false,
   title: 'Fort Davis National Historic Site'
 },
 {
  lat: 43.21053441,
  lng: -75.45557626,
  label: 'D',
  draggable: false,
  title: 'Fort Stanwix National Monument' ,
},
{
  lat: 38.86298458,
  lng: -76.98508147,
  label: 'D',
  draggable: false,
  title: 'Frederick Douglass National Historic Site' ,
},
{
  lat:  38.28277118,
  lng: -77.6470428,
  label: 'D',
  draggable: false,
  title: 'Fredericksburg & Spotsylvania National Military Park' ,
},
{
  lat: 39.77543423,
  lng: -79.92504169,
  label: 'D',
  draggable: false,
  title: 'Friendship Hill National Historic Site' ,
},
{
  lat: 67.75961636,
  lng: -153.2917758,
  label: 'D',
  draggable: false,
  title: 'Gates Of The Arctic National Park & Preserve' ,
},
{
  lat: 38.20614947,
  lng: -81.00420836,
  label: 'D',
  draggable: false,
  title: 'Gauley River National Recreation Area' ,
},
{
  lat: 38.96912315,
  lng: -77.14012206,
  label: 'D',
  draggable: false,
  title: 'Glen Echo Park' ,
},
{
  lat: 40.69164233,
  lng: -74.01670765,
  label: 'D',
  draggable: false,
  title: 'Golden Gate National Recreation Area' ,
},
{
  lat: 43.21053441,
  lng: -75.45557626,
  label: 'D',
  draggable: false,
  title: 'Governors Island National Monument' ,
},
{
  lat: 42.9128920286894,
  lng: -76.5646715462208,
  label: 'D',
  draggable: false,
  title: 'Harriet Tubman National Historical Park' ,
},
{
  lat: 37.20027185,
  lng: -76.75469561,
  label: 'D',
  draggable: false,
  title: 'Historic Jamestowne Part of Colonial National Historical Park' ,
},
{
  lat: 33.18713877,
  lng: -111.9192737,
  label: 'D',
  draggable: false,
  title: 'Hohokam Pima National Monument' ,
},
{
  lat: 59.81804414,
  lng: -150.106502,
  label: 'D',
  draggable: false,
  title: 'Kenai Fjords National Park' ,
},
{
  lat: 47.3540219,
  lng: -101.3860533,
  label: 'D',
  draggable: false,
  title: 'Knife River Indian Villages National Historic Site' ,
},
{
  lat: 38.88784226,
  lng: -77.04773857,
  label: 'D',
  draggable: false,
  title: 'Korean War Veterans Memorial' ,
},
{
  lat: 38.88927229,
  lng: -77.05017778,
  label: 'D',
  draggable: false,
  title: 'Lincoln Memorial' ,
},
{
  lat: 34.7369465,
  lng: -92.29987899,
  label: 'D',
  draggable: false,
  title: 'Little Rock Central High School National Historic Site' ,
},
{
  lat: 42.37698854,
  lng: -71.12636956,
  label: 'D',
  draggable: false,
  title: "Longfellow House Washington's Headquarters National Historic Site" ,
},
{
  lat: 36.72559195,
  lng: -118.1547177,
  label: 'D',
  draggable: false,
  title: 'Manzanar National Historic Site' ,
},
{
  lat: 42.36819596,
  lng: -73.70834257,
  label: 'D',
  draggable: false,
  title: 'Martin Van Buren National Historic Site' ,
},
{
  lat: 42.518180847168,
  lng: -83.8187713623047,
  label: 'D',
  draggable: false,
  title: 'Motor Cities National Heritage Area' ,
},
{
  lat: 39.9818229675293,
  lng: -84.0711364746094,
  label: 'D',
  draggable: false,
  title: 'National Aviation Heritage Area' ,
},
{
  lat: 38.85301412,
  lng: -76.98495791,
  label: 'D',
  draggable: false,
  title: 'National Capital Parks-East' ,
},
{
  lat: 42.79413083,
  lng: -99.91870646,
  label: 'D',
  draggable: false,
  title: 'Niobrara National Scenic River' ,
},
{
  lat: 32.03585543,
  lng: -112.8573314,
  label: 'D',
  draggable: false,
  title: 'Organ Pipe Cactus National Monument' ,
},
{
  lat: 37.13968894,
  lng: -91.25709817,
  label: 'D',
  draggable: false,
  title: 'Ozark National Scenic Riverways' ,
},
{
  lat: 36.41535465,
  lng: -113.6682797,
  label: 'D',
  draggable: false,
  title: 'Parashant National Monument' ,
},
{
  lat: 37.19109957,
  lng: -77.47594865,
  label: 'D',
  draggable: false,
  title: 'Petersburg National Battlefield' ,
},
{
  lat: 40.88579128,
  lng: -73.49686438,
  label: 'D',
  draggable: false,
  title: 'Sagamore Hill National Historic Site' ,
},
{
  lat: 45.70019235,
  lng: -92.36126685,
  label: 'D',
  draggable: false,
  title: 'Saint Croix National Scenic Riverway' ,
},
{
  lat: 45.70019235,
  lng: -92.36126685,
  label: 'D',
  draggable: false,
  title: 'Salinas Pueblo Missions National Monument' ,
},
{
  lat: 34.35423203,
  lng: -106.2050309,
  label: 'D',
  draggable: false,
  title: 'Salinas Pueblo Missions National Monument' ,
},
{
  lat: 17.77908602,
  lng: -64.75519348,
  label: 'D',
  draggable: false,
  title: 'Salt River Bay National Historical Park and Ecological Preserve' ,
},
{
  lat: 29.31262089,
  lng: -98.4289522,
  label: 'D',
  draggable: false,
  title: 'San Antonio Missions National Historical Park' ,
},
{
  lat: 47.17777274,
  lng: -103.4300083,
  label: 'D',
  draggable: false,
  title: 'Theodore Roosevelt National Park' ,
},
{
  lat: 38.88101431,
  lng: -77.03632572,
  label: 'D',
  draggable: false,
  title: 'Thomas Jefferson Memorial' ,
},
{
  lat: 37.38623205,
  lng: -76.29900672,
  label: 'D',
  draggable: false,
  title: 'Yorktown Battlefield Part of Colonial National Historical Park' ,
},
 // complete the new complete list
     
   ]
 }
 
 // just an interface for type safety.
 interface marker {
   lat: number;
   lng: number;
   label?: string;
   draggable: boolean;
   title:string;  
  

}
