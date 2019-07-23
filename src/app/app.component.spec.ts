import { AppComponent } from './app.component';

const authorService: any = {
  loadAll: () => undefined,
};

const bookService: any = {
  loadAll: () => undefined,
};

let component;
function init(): void {
  component = new AppComponent(authorService, bookService);
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
