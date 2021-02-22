import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  QUOTES_FEATURE_KEY,
  State,
  QuotesPartialState,
  quotesAdapter,
} from './quotes.reducer';

// Lookup the 'Quotes' feature state managed by NgRx
export const getQuotesState = createFeatureSelector<QuotesPartialState, State>(
  QUOTES_FEATURE_KEY
);

const { selectAll, selectEntities } = quotesAdapter.getSelectors();

export const getQuotesLoaded = createSelector(
  getQuotesState,
  (state: State) => state.loaded
);

export const getQuotesError = createSelector(
  getQuotesState,
  (state: State) => state.error
);

export const getAllQuotes = createSelector(getQuotesState, (state: State) =>
  selectAll(state)
);

export const getQuotesEntities = createSelector(
  getQuotesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getQuotesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getQuotesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getRandomQuotes = createSelector(getAllQuotes, (quotes) => {
  const start = Math.floor(Math.random() * quotes.length);

  return quotes.slice(start, start + 10).map((quote, index) => {
    return {
      id: index,
      ...quote,
    };
  });
});
