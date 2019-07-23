import { AppComponent } from './app.component';

const authorService: any = {
  loadAll: () => undefined,
};

const bookStoreService: any = {
  dispatchLoadAction: () => undefined,
};

let component;
function init(): void {
  component = new AppComponent(authorService, bookStoreService);
}

describe('AppComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('constructs', () => {
      expect(component).toBeDefined();
    });
  });
});
