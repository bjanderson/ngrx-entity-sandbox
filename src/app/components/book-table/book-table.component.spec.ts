import { of } from 'rxjs';
import { Author } from 'src/app/models';
import { BookTableComponent } from './book-table.component';

const authorStoreService: any = {
  getAuthorOfBook: () => of(new Author()),
};

let component: any;
function init() {
  component = new BookTableComponent(authorStoreService);
}

describe('BookTableComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('ngOnChanges()', () => {
    beforeEach(() => {
      init();
      component.updateDataSource = () => undefined;
    });

    it('is a function', () => {
      expect(typeof component.ngOnChanges).toEqual('function');
    });

    it('calls updateDataSource() when the tableData is changed', () => {
      const spy = spyOn(component, 'updateDataSource').and.callThrough();
      const changes = {tableData: {currentValue: [{value: 'test 1'}]}};
      component.ngOnChanges(changes);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('updateDataSource()', () => {
    beforeEach(() => {
      init();
    });

    it('is a function', () => {
      expect(typeof component.updateDataSource).toEqual('function');
    });

    it('sets the dataSource data', () => {
      const data = [{value: 'test 1'}];
      component.tableData = data;
      component.updateDataSource();
      expect(component.dataSource.data).toEqual(data);
    });
  });
});
