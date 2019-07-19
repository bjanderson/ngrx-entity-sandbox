import { SelectionModel } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Author, Book } from 'src/app/models';
import { AuthorStoreService } from 'src/app/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-book-table',
  styleUrls: ['./book-table.component.scss'],
  templateUrl: './book-table.component.html'
})
export class BookTableComponent implements OnChanges {

  @Input() tableData: any[] = [];

  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [
    'select',
    'title',
    'author',
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
    private authorStoreService: AuthorStoreService,
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

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'Select' : 'Deselect'} All`;
    }
    return `${this.selection.isSelected(row) ? 'Deselect' : 'Select'} Row`;
  }

  getAuthor$(book: Book): Observable<Author> {
    return this.authorStoreService.getAuthorOfBook(book).pipe(take(1));
  }
}
