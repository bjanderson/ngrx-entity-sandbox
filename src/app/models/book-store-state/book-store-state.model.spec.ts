import { defaultString } from '@lernato/common';
import { BookStoreState } from './book-store-state.model';

describe('BookStoreState', () => {
  describe('constructor defaults', () => {
    const defaults = {
      value: defaultString
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new BookStoreState()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new BookStoreState()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new BookStoreState(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        value: 'test value'
      };

      expect(Object.values(test)).toEqual(Object.values(new BookStoreState(test)));
    });
  });
});
