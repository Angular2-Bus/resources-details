import { Component, OnInit } from '@angular/core';

import { ResourceDataService } from './services/resource-data.service';
import 'lodash';

declare var _: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rdService: ResourceDataService;

  constructor(rdService: ResourceDataService) {
    this.rdService = rdService;
  }

  ngOnInit() {
    for(let i=0; i < 10; i++) {
      this.rdService.fetchResources(i);
    }
  }
}
