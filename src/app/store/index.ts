// WARNING: This file is auto-generated and gets overwritten.
// It will keep anything that adheres to the established patterns, but everything else will be lost.

export * from './author';
export * from './book';
export * from './router';

import { AuthorStoreModule } from './author';
import { BookStoreModule } from './book';
import { RouterStoreModule } from './router';

export const STORE_MODULES = [
  AuthorStoreModule,
  BookStoreModule,
  RouterStoreModule,
];
