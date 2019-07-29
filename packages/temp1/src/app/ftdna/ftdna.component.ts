import { Component, OnInit } from '@angular/core';

import { DomSanitizerPipe } from '../dom-sanitizer.pipe'
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ftdna',
  templateUrl: './ftdna.component.html',
  styleUrls: ['./ftdna.component.scss']
})
export class FtdnaComponent implements OnInit {
  urlSafe;
  constructor(
    public sanitizer:DomSanitizer
) { 
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.familytreedna.com/public/slovakia?iframe=yresults');
}

  ngOnInit() {
  }

}
