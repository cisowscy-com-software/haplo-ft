import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  GridModule,
  PageService,
  SortService,
  FilterService,
  GroupService,
  AggregateService,
  ColumnChooserService,
  SearchService,
  ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavExitComponent,
  NavHideComponent,
  NavEditComponent,
  NavJoinComponent,
  NavHelpComponent,
  NavL18nComponent,
  NavOpenComponent,
  NavSaveComponent,
  NavToolComponent,
  NavViewComponent, } from './public/components/nav';
import { DomSanitizerPipe } from './public/pipes/dom-sanitizer.pipe';


const routes: Routes = [
   { path: '', component: NavJoinComponent, outlet: 'set'},
   { path: 'exit', component: NavExitComponent, outlet: 'nav'},
   { path: 'hide', component: NavHideComponent, outlet: 'nav'},
   { path: 'save', component: NavSaveComponent, outlet: 'nav'},
   { path: 'open', component: NavOpenComponent, outlet: 'nav'},
   { path: 'join', component: NavJoinComponent, outlet: 'nav'},
   { path: 'edit', component: NavEditComponent, outlet: 'nav'},
   { path: 'tool', component: NavToolComponent, outlet: 'nav'},
   { path: 'help', component: NavHelpComponent, outlet: 'nav'},
   { path: 'l18n', component: NavL18nComponent, outlet: 'nav'},
   { path: 'view', component: NavViewComponent, outlet: 'nav'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavExitComponent,
    NavHideComponent,
    NavEditComponent,
    NavJoinComponent,
    NavHelpComponent,
    NavL18nComponent,
    NavOpenComponent,
    NavSaveComponent,
    NavToolComponent,
    NavViewComponent,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    GridModule,
    ButtonModule,
    TreeGridModule
  ],
  providers: [
    PageService,
    SortService,
    FilterService,
    GroupService,
    AggregateService,
    ColumnChooserService,
    SearchService,
    ToolbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
