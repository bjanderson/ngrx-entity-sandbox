import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BookDialogBodyComponent } from './book-dialog-body.component';
import { BookDialogComponent } from './book-dialog.component';

@NgModule({
  declarations: [
    BookDialogComponent,
    BookDialogBodyComponent
  ],

  entryComponents: [ BookDialogBodyComponent ],

  exports: [ BookDialogComponent ],

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class BookDialogModule {}
