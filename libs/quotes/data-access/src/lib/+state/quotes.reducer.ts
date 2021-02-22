import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as QuotesActions from './quotes.actions';
import { QuotesEntity } from './quotes.models';

export const QUOTES_FEATURE_KEY = 'quotes';

export interface State extends EntityState<QuotesEntity> {
  selectedId?: string | number; // which Quotes record has been selected
  loaded: boolean; // has the Quotes list been loaded
  error?: string | null; // last known error (if any)
}

export interface QuotesPartialState {
  readonly [QUOTES_FEATURE_KEY]: State;
}

export const quotesAdapter: EntityAdapter<QuotesEntity> = createEntityAdapter<QuotesEntity>();

export const initialState: State = quotesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const quotesReducer = createReducer(
  initialState,
  on(QuotesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(QuotesActions.loadQuotesSuccess, (state, { quotes }) =>
    quotesAdapter.setAll(quotes, { ...state, loaded: true })
  ),
  on(QuotesActions.loadQuotesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return quotesReducer(state, action);
}
