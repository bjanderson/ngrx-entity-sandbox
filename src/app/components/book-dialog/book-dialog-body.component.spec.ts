import { BookDialogBodyComponent } from './book-dialog-body.component';

const dialogRef: any = {
  close: () => undefined
};

const data: any = {
  parent: {}
};

let component;
function init() {
  component = new BookDialogBodyComponent(dialogRef, data);
}

describe('BookDialogBodyComponent', () => {
  describe('constructor()', () => {
    beforeEach(() => {
      init();
    });

    it('should create the component', () => {
      expect(component).toBeDefined();
    });
  });

  describe('close()', () => {
    it('calls dialogRef.close()', () => {
      const spy = spyOn(component.dialogRef, 'close').and.callThrough();
      component.close();
      expect(spy).toHaveBeenCalled();
    });
  });
});
