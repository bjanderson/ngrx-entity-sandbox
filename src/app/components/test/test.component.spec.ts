import { TestComponent } from './test.component';

let component: any;
function init() {
  component = new TestComponent();
}

describe('TestComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
