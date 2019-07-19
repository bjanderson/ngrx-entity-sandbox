import { of } from 'rxjs';
import { AuthorStoreState } from 'src/app/models';
import { LoadAction } from './author.store.actions';
import { AuthorStoreService } from './author.store.service';

const value = 'test value';
const store: any = of({
  [AuthorStoreService.storeName]: new AuthorStoreState({
    value
  })
});

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

  describe('getValue()', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named getValue', () => {
      expect(typeof service.getValue).toEqual('function');
    });

    it('gets the value from the store', (done) => {
      service.getValue().subscribe((result: string) => {
        expect(result).toEqual(value);
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
