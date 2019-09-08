import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3.component';

export const routes: Routes = [{
  path: '',
  component: Test3Component
}];

@NgModule({
  declarations: [ Test3Component ],

  exports: [ Test3Component ],

  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Test3Module {}
