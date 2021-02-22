import { QuotesEntity } from './quotes.models';
import * as QuotesActions from './quotes.actions';
import { State, initialState, reducer } from './quotes.reducer';

describe('Quotes Reducer', () => {
  const createQuotesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuotesEntity);

  beforeEach(() => {});

  describe('valid Quotes actions', () => {
    it('loadQuotesSuccess should return set the list of known Quotes', () => {
      const quotes = [
        createQuotesEntity('PRODUCT-AAA'),
        createQuotesEntity('PRODUCT-zzz'),
      ];
      const action = QuotesActions.loadQuotesSuccess({ quotes });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
