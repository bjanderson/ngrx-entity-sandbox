import { BookService } from './book.service';

const bookStoreService: any = {
  dispatchAddAllAction: () => undefined,
};


let service: any;
function init() {
  service = new BookService(bookStoreService);
}

describe('BookService', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(service).toBeDefined();
    });
  });

  describe('get', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named get', () => {
      expect(typeof service.get).toEqual('function');
    });

    it('calls bookStoreService.dispatchAddAllAction()', (done) => {
      const spy = spyOn(bookStoreService, 'dispatchAddAllAction').and.callThrough();
      service.get().subscribe(result => {
        expect(spy).toHaveBeenCalled();
        done();
      });
    });
  });
});
