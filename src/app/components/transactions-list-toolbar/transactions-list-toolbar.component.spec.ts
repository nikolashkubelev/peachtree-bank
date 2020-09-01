import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsListToolbarComponent } from './transactions-list-toolbar.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('TransactionsListToolbarComponent', () => {
  let component: TransactionsListToolbarComponent;
  let fixture: ComponentFixture<TransactionsListToolbarComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
