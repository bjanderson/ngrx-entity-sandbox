import { AuthorService } from './author.service';

const authorStoreService: any = {
  dispatchAddAllAction: () => undefined,
};

let service: any;
function init() {
  service = new AuthorService(authorStoreService);
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

    it('calls authorStoreService.dispatchAddAllAction()', (done) => {
      const spy = spyOn(authorStoreService, 'dispatchAddAllAction').and.callThrough();
      service.get().subscribe(result => {
        expect(spy).toHaveBeenCalled();
        done();
      });
    });
  });
});
