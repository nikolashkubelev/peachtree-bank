import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsContainerComponent } from './transactions-container.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('TransactionsContainerComponent', () => {
  let component: TransactionsContainerComponent;
  let fixture: ComponentFixture<TransactionsContainerComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
