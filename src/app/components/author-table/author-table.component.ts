import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Author, Book } from 'src/app/models';
import { BookStoreService } from 'src/app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-author-table',
  styleUrls: ['./author-table.component.scss'],
  templateUrl: './author-table.component.html'
})
export class AuthorTableComponent implements OnChanges {

  @Input() tableData: Author[] = [];

  dataSource = new MatTableDataSource<Author>([]);
  selection = new SelectionModel<Author>(true, []);
  displayedColumns: string[] = [
    'select',
    'name',
    'books',
  ];
  pageSizes = [10, 100];

  paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: false}) set matPaginator(paginator: MatPaginator) {
    this.paginator = paginator;
    if (this.dataSource != null && this.dataSource.paginator !== this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  sort: MatSort;
  @ViewChild(MatSort, {static: false}) set matSort(sort: MatSort) {
    this.sort = sort;
    if (this.dataSource != null && this.dataSource.sort !== this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  constructor(
    private bookStoreService: BookStoreService,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tableData != null && changes.tableData.currentValue != null) {
      this.updateDataSource();
    }
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.tableData);

    if (this.paginator != null) {
      this.dataSource.paginator = this.paginator;
    }

    if (this.sort != null) {
      this.dataSource.sort = this.sort;
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Author): string {
    if (!row) {
      return `${this.isAllSelected() ? 'Select' : 'Deselect'} All`;
    }
    return `${this.selection.isSelected(row) ? 'Deselect' : 'Select'} Row`;
  }

  getBooks$(author: Author): Observable<Book[]> {
    return this.bookStoreService.getAllWithIds(author.bookIds).pipe(take(1));
  }

  goToBook(book: Book): void {

  }
}
