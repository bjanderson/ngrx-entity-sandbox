import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { BookDialogBodyComponent } from './book-dialog-body.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-dialog',
  styleUrls: ['./book-dialog.component.scss'],
  templateUrl: './book-dialog.component.html'
})
export class BookDialogComponent {
  @Input() showButton = true;

  dialogRef: MatDialogRef<BookDialogBodyComponent>;

  constructor(
    private dialog: MatDialog
  ) {}

  open(): void {
    const config = new MatDialogConfig();
    config.autoFocus = true;
    config.closeOnNavigation = true;
    config.disableClose = false;
    config.hasBackdrop = true;
    config.panelClass = 'standard-dialog';
    config.maxHeight = '90vh';
    config.width = '90%';
    config.maxWidth = '90%';
    config.data = { parent: this };
    this.dialogRef = this.dialog.open(BookDialogBodyComponent, config);
  }
}
