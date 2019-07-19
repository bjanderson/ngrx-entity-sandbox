import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuthorTableComponent } from './author-table.component';

@NgModule({
  declarations: [ AuthorTableComponent ],

  exports: [ AuthorTableComponent ],

  imports: [
    CommonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class AuthorTableModule {}
