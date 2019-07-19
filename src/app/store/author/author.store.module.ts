import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthorEffects } from './author.store.effects';
import { authorReducer } from './author.store.reducers';
import { AuthorStoreService } from './author.store.service';

@NgModule({
  exports: [
    EffectsModule,
    StoreModule
  ],

  imports: [
    StoreModule.forFeature(AuthorStoreService.storeName, authorReducer),
    EffectsModule.forFeature([AuthorEffects])
  ],

  providers: [
    AuthorStoreService
  ]
})
export class AuthorStoreModule {}
