import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavExitComponent } from './public/components/nav/nav-exit.component';
import { NavHideComponent } from './public/components/nav/nav-hide.component';
import { NavEditComponent } from './public/components/nav/nav-edit.component';
import { NavJoinComponent } from './public/components/nav/nav-join.component';
import { NavHelpComponent } from './public/components/nav/nav-help.component';
import { NavL18nComponent } from './public/components/nav/nav-l18n.component';
import { NavOpenComponent } from './public/components/nav/nav-open.component';
import { NavSaveComponent } from './public/components/nav/nav-save.component';
import { NavToolComponent } from './public/components/nav/nav-tool.component';
import { NavViewComponent } from './public/components/nav/nav-view.component';
import { DomSanitizerPipe } from './public/pipes/dom-sanitizer.pipe';


const routes: Routes = [
   { path: '', component: NavHelpComponent, outlet: 'nav'},
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
