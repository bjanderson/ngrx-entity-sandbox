import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { AuthorDialogBodyComponent } from './author-dialog-body.component';
import { AuthorDialogComponent } from './author-dialog.component';

@NgModule({
  declarations: [
    AuthorDialogComponent,
    AuthorDialogBodyComponent
  ],

  entryComponents: [ AuthorDialogBodyComponent ],

  exports: [ AuthorDialogComponent ],

  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class AuthorDialogModule {}
