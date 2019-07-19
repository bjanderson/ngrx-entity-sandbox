import { AuthorPageComponent } from './author-page.component';

let component: any;
function init() {
  component = new AuthorPageComponent();
}

describe('AuthorPageComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
