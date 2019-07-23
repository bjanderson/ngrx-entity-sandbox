import { from } from 'rxjs';
import { AuthorEffects } from './author.store.effects';

const actions$: any = from([
  // new LoadAction()
]);

// const authorService: any = {
//   get: () => EMPTY
// };

let effects: any;
function init() {
  effects = new AuthorEffects(actions$, /* authorService */);
}

describe('AuthorEffects', () => {
  describe('constructor', () => {
    beforeEach(() => {
      init();
    });

    it('has a function named ', () => {
      expect(effects).toBeDefined();
    });
  });

  // describe('loadAuthor()', () => {
  //   beforeEach(() => {
  //     init();
  //   });

  //   it('is a function', () => {
  //      expect(typeof effects.loadAuthor).toEqual('function');
  //   });

  //   it('calls AuthorService.get()', () => {
  //     const spy = spyOn(authorService, 'get').and.callThrough();
  //     effects.loadAuthor();
  //     expect(spy).toHaveBeenCalled();
  //   });

  //   it('it returns an instance of LoadSuccessAction', (done) => {
  //     effects.authorService.get = () => of({});
  //     effects.loadAuthor$.pipe(take(1)).subscribe(result => {
  //       expect(result instanceof LoadSuccessAction).toEqual(true);
  //       done();
  //     });
  //   });

  //   it('it returns an instance of LoadFailAction', (done) => {
  //     effects.authorService.get = () => throwError({});
  //     effects.loadAuthor$.pipe(take(1)).subscribe(result => {
  //       expect(result instanceof LoadFailAction).toEqual(true);
  //       done();
  //     });
  //   });
  // });
});
