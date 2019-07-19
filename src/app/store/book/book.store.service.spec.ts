import { of } from 'rxjs';
import { Book, BookStoreState } from 'src/app/models';
import { LoadAction } from './book.store.actions';
import { BookStoreService } from './book.store.service';

const books = [new Book()];
const store: any = of({
  [BookStoreService.storeName]: new BookStoreState({
    books,
  })
});

let service: any;
function init() {
  service = new BookStoreService(store);
}

describe('BookStoreService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(service).toBeDefined();
    });
  });

  describe('getValue()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getValue', () => {
      expect(typeof service.getValue).toEqual('function');
    });

    it('gets the books from the store', (done) => {
      service.getValue().subscribe(result => {
        expect(result).toEqual(books);
        done();
      });
    });
  });

  describe('dispatchLoadAction()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchLoadAction', () => {
      expect(typeof service.dispatchLoadAction).toEqual('function');
    });

    it('calls dispatchAction()', () => {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchLoadAction();
      expect(spy).toHaveBeenCalledWith(new LoadAction());
    });
  });
});
