import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
  declarations: [ AppHeaderComponent ],

  exports: [ AppHeaderComponent ],

  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AppHeaderModule {}
