import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { QuotesEffects } from './quotes.effects';
import * as QuotesActions from './quotes.actions';

describe('QuotesEffects', () => {
  let actions: Observable<any>;
  let effects: QuotesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        QuotesEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(QuotesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: QuotesActions.init() });

      const expected = hot('-a-|', {
        a: QuotesActions.loadQuotesSuccess({ quotes: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
