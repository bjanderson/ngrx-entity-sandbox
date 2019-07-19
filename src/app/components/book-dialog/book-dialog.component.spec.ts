import { BookDialogComponent } from './book-dialog.component';

const dialog: any = {
  open: () => {}
};

let component: any;
function init() {
  component = new BookDialogComponent(dialog);
}

describe('BookDialogComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('open()', () => {
    it('has a function named open', () => {
      expect(typeof component.open).toEqual('function');
    });

    it('calls dialog.open()', () => {
      const spy = spyOn(component.dialog, 'open').and.callThrough();
      component.open();
      expect(spy).toHaveBeenCalled();
    });
  });
});
