import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingBarComponent } from './sorting-bar.component';
import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

describe('SortingBarComponent', () => {
  let component: SortingBarComponent;
  let fixture: ComponentFixture<SortingBarComponent>;

  beforeEach(async(() => {
    PeachTreeBankTestingModule().compileComponents();
  }));

  beforeEach(() => {
    fixture = PeachTreeBankTestingModule().createComponent(SortingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
