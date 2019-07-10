import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { projectsFTDNA } from '../../../data/projects-FTDNA';

@Component({
  selector: 'haploft-nav-join',
  template: `
    <p>
      nav-join works!
    </p>
    <ejs-grid [dataSource]='tabSelectData'> </ejs-grid>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavJoinComponent implements OnInit {

  public tabSelectData: object[];

  constructor() { }

  ngOnInit() {
    this.tabSelectData = projectsFTDNA;
  }

}
