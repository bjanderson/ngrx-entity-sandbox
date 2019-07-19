import { EMPTY } from 'rxjs';
import { BookService } from './book.service';

const api: any = {
  get: () => EMPTY
};

let service: any;
function init() {
  service = new BookService(api);
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

    it('calls api.get()', () => {
      const spy = spyOn(api, 'get').and.callThrough();
      service.get();
      expect(spy).toHaveBeenCalled();
    });
  });
});
