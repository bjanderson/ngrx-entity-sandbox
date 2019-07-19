import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService, metaReducers, StoreModule } from '@lernato/common-angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule as NgrxStoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderModule } from './components/app-header';
import { STORE_MODULES } from './store';

@NgModule({
  bootstrap: [AppComponent],

  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppHeaderModule,
    StoreModule,
    ...STORE_MODULES,
    NgrxStoreModule.forRoot({} as any, {initialState: {}, metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([])
  ],

  providers: [
    MatIconRegistry,

    { provide: ApiService, useClass: ApiService, deps: [ HttpClient ]}
  ],
})
export class AppModule {
  constructor(
    public matIconRegistry: MatIconRegistry,
  ) {
    matIconRegistry.setDefaultFontSetClass('fas');
  }
}
