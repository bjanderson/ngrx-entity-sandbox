import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { authorReducer } from './author.store.reducers';
import { AuthorStoreService } from './author.store.service';

@NgModule({
  exports: [
    StoreModule
  ],

  imports: [
    StoreModule.forFeature(AuthorStoreService.storeName, authorReducer),
  ],

  providers: [
    AuthorStoreService
  ]
})
export class AuthorStoreModule {}
