import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { projectsFTDNA } from '../../../data/projects-FTDNA';
import { treeSNP } from '../../../data/datasourceTMP';
//import { TreeGridComponent, ResizeService, ReorderService } from '@syncfusion/ej2-angular-treegrid';
import { PageSettingsModel, SortSettingsModel, FilterSettingsModel, ResizeService, ReorderService, GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'haploft-nav-join',
  templateUrl: '../../views/Sheet-Project-FTDNA.html',
  styleUrls: ['../../style/Sheet-Project-FTDNA.scss'],
  providers: [ ResizeService, ReorderService],
  encapsulation: ViewEncapsulation.None
})
export class NavJoinComponent implements OnInit {

  //public tabSelectData: object[];
  //public pageSettings: PageSettingsModel;
  //public data: object[];
 // public pageSettings: PageSettingsModel;

  //constructor() { }

 // ngOnInit(): void {
  //      this.data = data;
  //      this.pageSettings = { pageSize: 6 };
    //this.tabSelectData = projectsFTDNA;
    //this.pageSettings = { pageSize: 6 };
  //}

//}
name = 'Angular';
  public tabProjectsFTDNA: object[];
   @ViewChild('ProjectTabFTDNA', {static: false}) public gridObj: GridComponent;
    public filterSettings: FilterSettingsModel;
    public sortSettings: SortSettingsModel;
    public pageSettings: PageSettingsModel;

    ngOnInit(): void {
      this.tabProjectsFTDNA = projectsFTDNA;
        //this.data = treeSNP;
        this.filterSettings = {
          columns: [{ 
            field: 'name', 
            matchCase: true, 
            operator: 'contains', 
            predicate: 'and', 
            value: 'ddd' 
          }]};
        this.sortSettings = { 
          columns: [
            { field: 'hasYmap', direction: 'Descending' },
            { field: 'hasMmap', direction: 'Descending' }
        ]};
        //Ascending
        this.pageSettings = { 
          pageSize: 100,
          pageSizes: [5,10, 15, 20, 25, 50, 100,150,200,250, 500],
          //pageSizeMode: 'All',
          pageCount:5
        };
    }
    //onDataBound() {
    //    this.treeGridObj.autoFitColumns();
    //}
}
