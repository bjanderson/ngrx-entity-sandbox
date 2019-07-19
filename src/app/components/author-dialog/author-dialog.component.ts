import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AuthorDialogBodyComponent } from './author-dialog-body.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-author-dialog',
  styleUrls: ['./author-dialog.component.scss'],
  templateUrl: './author-dialog.component.html'
})
export class AuthorDialogComponent {
  @Input() showButton = true;

  dialogRef: MatDialogRef<AuthorDialogBodyComponent>;

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
    this.dialogRef = this.dialog.open(AuthorDialogBodyComponent, config);
  }
}
