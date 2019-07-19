import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTableModule } from '../book-table';
import { BookPageComponent } from './book-page.component';

export const routes: Routes = [{
  path: '',
  component: BookPageComponent
}];

@NgModule({
  declarations: [ BookPageComponent ],

  exports: [ BookPageComponent ],

  imports: [
    CommonModule,
    BookTableModule,
    RouterModule.forChild(routes)
  ]
})
export class BookPageModule {}
