import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookEffects } from './book.store.effects';
import { bookReducer } from './book.store.reducers';
import { BookStoreService } from './book.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature(BookStoreService.storeName, bookReducer),
    EffectsModule.forFeature([BookEffects])
  ],

  providers: [
    BookStoreService
  ]
})
export class BookStoreModule {}
