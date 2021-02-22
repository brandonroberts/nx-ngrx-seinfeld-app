import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromQuotes from './+state/quotes.reducer';
import { QuotesEffects } from './+state/quotes.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromQuotes.QUOTES_FEATURE_KEY, fromQuotes.reducer),
    EffectsModule.forFeature([QuotesEffects]),
  ],
})
export class QuotesDataAccessModule {}
