import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BookTableComponent } from './book-table.component';

@NgModule({
  declarations: [ BookTableComponent ],

  exports: [ BookTableComponent ],

  imports: [
    CommonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class BookTableModule {}
