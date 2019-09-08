import { Test2Component } from './test2.component';

let component: any;
function init() {
  component = new Test2Component();
}

describe('Test2Component', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
