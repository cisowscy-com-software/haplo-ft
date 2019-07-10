import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { projectsFTDNA } from '../../../data/projects-FTDNA';
import { PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'haploft-nav-join',
  templateUrl: '../../views/Sheet-Project-FTDNA.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavJoinComponent implements OnInit {

  public tabSelectData: object[];
  public pageSettings: PageSettingsModel;
  constructor() { }

  ngOnInit() {
    this.tabSelectData = projectsFTDNA;
    this.pageSettings = { pageSize: 6 };
  }

}
