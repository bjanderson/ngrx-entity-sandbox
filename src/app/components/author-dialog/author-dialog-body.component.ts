import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AuthorDialogComponent } from './author-dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-author-dialog-body',
  styleUrls: ['./author-dialog-body.component.scss'],
  templateUrl: './author-dialog-body.component.html'
})
export class AuthorDialogBodyComponent {

  parent: AuthorDialogComponent;

  constructor(
    private dialogRef: MatDialogRef<AuthorDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { parent: AuthorDialogComponent}
  ) {
    this.parent = data.parent;
  }

  close(): void {
    this.dialogRef.close();
  }
}
