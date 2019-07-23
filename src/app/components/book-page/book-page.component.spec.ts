import { of } from 'rxjs';
import { BookPageComponent } from './book-page.component';

const bookStoreService: any = {
  getAll: () => of([]),
};

let component: any;
function init() {
  component = new BookPageComponent(bookStoreService);
}

describe('BookPageComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
