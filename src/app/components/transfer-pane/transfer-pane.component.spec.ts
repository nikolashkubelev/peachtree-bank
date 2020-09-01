import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPaneComponent } from './transfer-pane.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('TransferPaneComponent', () => {
  let component: TransferPaneComponent;
  let fixture: ComponentFixture<TransferPaneComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
