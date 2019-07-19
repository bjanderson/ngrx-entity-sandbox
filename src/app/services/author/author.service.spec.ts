import { EMPTY } from 'rxjs';
import { AuthorService } from './author.service';

const api: any = {
  get: () => EMPTY
};

let service: any;
function init() {
  service = new AuthorService(api);
}

describe('AuthorService', () => {
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
