import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'haploft-root',
  templateUrl: './public/views/haploft-root.html',  
  styleUrls: ['./public/style/haploft-root.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  showControlPanel:boolean = true;
  selectedControlPanel:number = 7;
  controlPanel = [
    {nr: 0, link: 'exit', srcSVG: 'assets/svgs/WINDOW_EXIT.svg'},
    {nr: 1, link: 'hide', srcSVG: 'assets/svgs/WINDOW_HIDE.svg'},
    {nr: 2, link: 'save', srcSVG: 'assets/svgs/DATABASE_SAVE.svg'},
    {nr: 3, link: 'open', srcSVG: 'assets/svgs/DATABASE_OPEN.svg'},
    {nr: 4, link: 'join', srcSVG: 'assets/svgs/DATABASE_DOWN.svg'},
    {nr: 5, link: 'edit', srcSVG: 'assets/svgs/DATABASE_EDIT.svg'},
    {nr: 6, link: 'tool', srcSVG: 'assets/svgs/SETINGS.svg'},
    {nr: 7, link: 'help', srcSVG: 'assets/svgs/SUPPORT.svg'},
    {nr: 8, link: 'l18n', srcSVG: 'assets/svgs/LANGUAGE.svg'},
    {nr: 9, link: 'view', srcSVG: 'assets/svgs/WINDOW_NEXT.svg'}
  ];
  constructor(private router: Router) {}
  changeControlPanel(nr:number, url:string) {
    this.selectedControlPanel = nr;
    this.router.navigate([{ outlets: {nav: url} }], {skipLocationChange: true}).then(check => {
     // console.log(check); // true if navigation is successful
    }, err => {
    //  console.log(err) // when there's an error
    });
    //alert(url);
  }
  //title = 'haplo-ft';
}

