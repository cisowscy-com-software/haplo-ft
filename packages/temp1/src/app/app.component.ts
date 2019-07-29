import { Component, ViewEncapsulation, ViewChild, ViewChildren, OnInit, ElementRef, NgModule, Renderer2 } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None
  })

  export class AppComponent {
    showControlPanel:boolean = true;
    //name



  }
