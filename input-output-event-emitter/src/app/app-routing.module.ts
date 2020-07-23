import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component'
import { ChildrenWrapperComponent } from './children-wrapper/children-wrapper.component';


const routes: Routes = [
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
  { path: 'children-wrapper', component: ChildrenWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
