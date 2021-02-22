import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as QuotesFeature from './quotes.reducer';
import * as QuotesActions from './quotes.actions';
import { QuotesService } from '../quotes.service';
import { map } from 'rxjs/operators';

@Injectable()
export class QuotesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuotesActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.quotesService.getAll()
            .pipe(
              map(quotes => QuotesActions.loadQuotesSuccess({ quotes }))
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return QuotesActions.loadQuotesFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private quotesService: QuotesService) {}
}
