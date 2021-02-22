import { createAction, props } from '@ngrx/store';
import { QuotesEntity } from './quotes.models';

export const init = createAction('[Quotes Page] Init');

export const loadQuotesSuccess = createAction(
  '[Quotes/API] Load Quotes Success',
  props<{ quotes: QuotesEntity[] }>()
);

export const loadQuotesFailure = createAction(
  '[Quotes/API] Load Quotes Failure',
  props<{ error: any }>()
);
