import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesPageComponent } from './quotes-page.component';

describe('QuotesPageComponent', () => {
  let component: QuotesPageComponent;
  let fixture: ComponentFixture<QuotesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
