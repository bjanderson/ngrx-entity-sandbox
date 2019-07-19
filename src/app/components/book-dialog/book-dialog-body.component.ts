import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { BookDialogComponent } from './book-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-dialog-body',
  styleUrls: ['./book-dialog-body.component.scss'],
  templateUrl: './book-dialog-body.component.html'
})
export class BookDialogBodyComponent {

  parent: BookDialogComponent;

  constructor(
    private dialogRef: MatDialogRef<BookDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { parent: BookDialogComponent}
  ) {
    this.parent = data.parent;
  }

  close(): void {
    this.dialogRef.close();
  }
}
