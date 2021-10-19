import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers, ROOT_REDUCER_TOKEN, runtimeChecks } from './store/store-configuration';

const storeModules = [
  StoreModule.forRoot(ROOT_REDUCER_TOKEN, { metaReducers, runtimeChecks }),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
  EffectsModule.forRoot([]),
  StoreRouterConnectingModule.forRoot(),
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...storeModules],
  providers: [],
})
export class CoreModule {}
