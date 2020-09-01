import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';
import { TestBed } from '@angular/core/testing';

import { TransferFormBuilderService } from './transfer-form-builder.service';

describe('TransferFormBuilderService', () => {
  let service: TransferFormBuilderService;

  beforeEach(() => {
    const testingModule = PeachTreeBankTestingModule();
    service = testingModule.inject(TransferFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
