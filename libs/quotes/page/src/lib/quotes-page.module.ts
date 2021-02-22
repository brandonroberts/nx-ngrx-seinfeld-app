import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QuotesDataAccessModule } from '@seinfeld/quotes/data-access';

import { QuotesPageComponent } from './quotes-page/quotes-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: QuotesPageComponent } 
    ]),
    QuotesDataAccessModule
  ],
  declarations: [QuotesPageComponent],
})
export class QuotesPageModule {}
