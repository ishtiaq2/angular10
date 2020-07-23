import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { ChildrenWrapperComponent } from './children-wrapper/children-wrapper.component';
import { ChildW1Component } from './children-wrapper/child1/child1.component';
import { ChildW2Component } from './children-wrapper/child2/child2.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    ChildrenWrapperComponent,
    ChildW1Component,
    ChildW2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
