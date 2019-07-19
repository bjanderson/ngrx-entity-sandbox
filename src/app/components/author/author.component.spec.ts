import { AuthorComponent } from './author.component';

let component: any;
function init() {
  component = new AuthorComponent();
}

describe('AuthorComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
