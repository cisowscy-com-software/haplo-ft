import { Component, ViewEncapsulation, ViewChild, ViewChildren, OnInit, ElementRef, NgModule, Renderer2 } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../views/root.html',
    styleUrls: ['../views/root.scss'],
    encapsulation: ViewEncapsulation.None
  })

  export class AppComponent {
    showControlPanel:boolean = true;

   

  }
