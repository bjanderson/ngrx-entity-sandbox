import { of } from 'rxjs';
import { Author } from 'src/app/models';
import { AddAllAction, RemoveOneAction, UpsertOneAction } from './author.store.actions';
import { AuthorStoreService } from './author.store.service';

const author1 = new Author({pk: 1});
const author2 = new Author({pk: 2});
const author3 = new Author({pk: 3});

const storeState = {ids: [ 1, 2, 3 ], entities: { 1: author1, 2: author2, 3: author3 }};
const store: any = of({ [AuthorStoreService.storeName]: storeState });

let service: any;
function init() {
  service = new AuthorStoreService(store);
}

describe('AuthorStoreService', () => {
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
      service.getAll().subscribe((result: Author[]) => {
        expect(result).toEqual([ author1, author2, author3 ]);
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
      service.getById(1).subscribe((result: Author) => {
        expect(result).toEqual(author1);
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
      service.getAllWithIds([1, 3]).subscribe((result: Author[]) => {
        expect(result).toEqual([ author1, author3 ]);
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
      const author = new Author();
      service.dispatchUpsertOneAction(author);
      expect(spy).toHaveBeenCalledWith(new UpsertOneAction(author));
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
