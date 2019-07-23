import { of } from 'rxjs';
import { Book } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './book.store.actions';
import { BookStoreService } from './book.store.service';

const book1 = new Book({pk: 1});
const book2 = new Book({pk: 2});
const book3 = new Book({pk: 3});

const storeState = {ids: [ 1, 2, 3 ], entities: { 1: book1, 2: book2, 3: book3 }};
const store: any = of({ [BookStoreService.storeName]: storeState });

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

  describe('getAll()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getAll', () => {
      expect(typeof service.getAll).toEqual('function');
    });

    it('gets all the items from the store', (done) => {
      service.getAll().subscribe((result: Book[]) => {
        expect(result).toEqual([ book1, book2, book3 ]);
        done();
      });
    });
  });

  describe('getById()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getById', () => {
      expect(typeof service.getById).toEqual('function');
    });

    it('gets the item from the store with the given id', (done) => {
      service.getById(1).subscribe((result: Book) => {
        expect(result).toEqual(book1);
        done();
      });
    });
  });

  describe('getAllWithIds()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getAllWithIds', () => {
      expect(typeof service.getAllWithIds).toEqual('function');
    });

    it('gets the items from the store with the given ids', (done) => {
      service.getAllWithIds([1, 3]).subscribe((result: Book[]) => {
        expect(result).toEqual([ book1, book3 ]);
        done();
      });
    });
  });

  describe('dispatchAddAllAction()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchAddAllAction', () => {
      expect(typeof service.dispatchAddAllAction).toEqual('function');
    });

    it('calls dispatchAction()', () => {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      service.dispatchAddAllAction([]);
      expect(spy).toHaveBeenCalledWith(new AddAllAction([]));
    });
  });

  describe('dispatchUpsertOneAction()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchUpsertOneAction', () => {
      expect(typeof service.dispatchUpsertOneAction).toEqual('function');
    });

    it('calls dispatchAction()', () => {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      const book = new Book();
      service.dispatchUpsertOneAction(book);
      expect(spy).toHaveBeenCalledWith(new UpsertOneAction(book));
    });
  });

  describe('dispatchRemoveOneAction()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named dispatchRemoveOneAction', () => {
      expect(typeof service.dispatchRemoveOneAction).toEqual('function');
    });

    it('calls dispatchAction()', () => {
      const spy = spyOn(service, 'dispatchAction').and.returnValue(null);
      const id = 1;
      service.dispatchRemoveOneAction(id);
      expect(spy).toHaveBeenCalledWith(new RemoveOneAction(id));
    });
  });
});
