import { from } from 'rxjs';
import { BookEffects } from './book.store.effects';

const actions$: any = from([
  // new LoadAction()
]);

// const bookService: any = {
//   get: () => EMPTY
// };

let effects: any;
function init() {
  effects = new BookEffects(actions$, /* bookService */);
}

describe('BookEffects', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named ', () => {
      expect(effects).toBeDefined();
    });
  });

  // describe('loadBook()', () => {
  //   beforeEach(() => {
  //     init();
  //   });

  //   it('is a function', () => {
  //      expect(typeof effects.loadBook).toEqual('function');
  //   });

  //   it('calls BookService.get()', () => {
  //     const spy = spyOn(bookService, 'get').and.callThrough();
  //     effects.loadBook();
  //     expect(spy).toHaveBeenCalled();
  //   });

  //   it('it returns an instance of LoadSuccessAction', (done) => {
  //     effects.bookService.get = () => of({});
  //     effects.loadBook$.pipe(take(1)).subscribe(result => {
  //       expect(result instanceof LoadSuccessAction).toEqual(true);
  //       done();
  //     });
  //   });

  //   it('it returns an instance of LoadFailAction', (done) => {
  //     effects.bookService.get = () => throwError({});
  //     effects.loadBook$.pipe(take(1)).subscribe(result => {
  //       expect(result instanceof LoadFailAction).toEqual(true);
  //       done();
  //     });
  //   });
  // });
});
