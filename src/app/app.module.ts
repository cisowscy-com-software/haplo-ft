import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FtdnaComponent } from './ftdna/ftdna.component';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
  ],
  providers: [],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    FtdnaComponent, DomSanitizerPipe 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
