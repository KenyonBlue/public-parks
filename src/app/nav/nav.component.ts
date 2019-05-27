import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = "Kenyon B. Code Challenge";

  // appTitle = 'kenyonApp';

  constructor() { }

  ngOnInit() {
  }

}
