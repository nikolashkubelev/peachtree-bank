import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneComponent } from './pane.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('PaneComponent', () => {
  let component: PaneComponent;
  let fixture: ComponentFixture<PaneComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
