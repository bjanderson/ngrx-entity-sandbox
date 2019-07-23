import { defaultString } from '@lernato/common';
import { Book } from './book.model';

describe('Book', () => {
  describe('constructor defaults', () => {
    const defaults = {
      authorId: null,
      pk: null,
      title: defaultString,
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Book()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Book()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Book(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        authorId: 1,
        pk: 2,
        title: 'test title',
      };

      expect(Object.values(test)).toEqual(Object.values(new Book(test)));
    });
  });
});
