import { BookComponent } from './book.component';

let component: any;
function init() {
  component = new BookComponent();
}

describe('BookComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
