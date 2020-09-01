import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPreviewComponent } from './transfer-preview.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('TransferPreviewComponent', () => {
  let component: TransferPreviewComponent;
  let fixture: ComponentFixture<TransferPreviewComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
