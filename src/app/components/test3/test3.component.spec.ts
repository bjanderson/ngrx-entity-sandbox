import { Test3Component } from './test3.component';

let component: any;
function init() {
  component = new Test3Component();
}

describe('Test3Component', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });
});
