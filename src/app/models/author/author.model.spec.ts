import { defaultString } from '@lernato/common';
import { Author } from './author.model';

describe('Author', () => {
  describe('constructor defaults', () => {
    const defaults = {
      value: defaultString
    };

    it('should have the expected fields', () => {
      expect(Object.keys(defaults)).toEqual(Object.keys(new Author()));
    });

    it('should set the default values when given no input object', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Author()));
    });

    it('should set the default values when given null', () => {
      expect(Object.values(defaults)).toEqual(Object.values(new Author(null)));
    });
  });

  describe('constructor assignments', () => {
    it('should set all values passed into the constructor', () => {
      const test = {
        value: 'test value'
      };

      expect(Object.values(test)).toEqual(Object.values(new Author(test)));
    });
  });
});
