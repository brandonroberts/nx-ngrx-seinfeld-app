import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuotesActions, QuotesSelectors } from '@seinfeld/quotes/data-access';

@Component({
  selector: 'seinfeld-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.css']
})
export class QuotesPageComponent implements OnInit {
  quotes$ = this.store.select(QuotesSelectors.getRandomQuotes);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(QuotesActions.init());
  }
}
