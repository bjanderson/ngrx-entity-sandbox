import { BookPageComponent } from './book-page.component';

let component: any;
function init() {
  component = new BookPageComponent();
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
