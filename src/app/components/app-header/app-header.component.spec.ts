import { AppHeaderComponent } from './app-header.component';

let component: any;
function init() {
  component = new AppHeaderComponent();
}

describe('AppHeaderComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
