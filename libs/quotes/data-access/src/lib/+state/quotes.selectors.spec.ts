import { QuotesEntity } from './quotes.models';
import { State, quotesAdapter, initialState } from './quotes.reducer';
import * as QuotesSelectors from './quotes.selectors';

describe('Quotes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getQuotesId = (it) => it['id'];
  const createQuotesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuotesEntity);

  let state;

  beforeEach(() => {
    state = {
      quotes: quotesAdapter.setAll(
        [
          createQuotesEntity('PRODUCT-AAA'),
          createQuotesEntity('PRODUCT-BBB'),
          createQuotesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Quotes Selectors', () => {
    it('getAllQuotes() should return the list of Quotes', () => {
      const results = QuotesSelectors.getAllQuotes(state);
      const selId = getQuotesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = QuotesSelectors.getSelected(state);
      const selId = getQuotesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getQuotesLoaded() should return the current 'loaded' status", () => {
      const result = QuotesSelectors.getQuotesLoaded(state);

      expect(result).toBe(true);
    });

    it("getQuotesError() should return the current 'error' state", () => {
      const result = QuotesSelectors.getQuotesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
