import { of } from 'rxjs';
import { AuthorPageComponent } from './author-page.component';

const authorStoreService: any = {
  getAll: () => of([]),
};

let component: any;
function init() {
  component = new AuthorPageComponent(authorStoreService);
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
