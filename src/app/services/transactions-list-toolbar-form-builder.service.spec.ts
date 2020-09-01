import { PeachTreeBankTestingModule } from 'src/app/app.testing.module';

import { TransactionsListToolbarFormBuilderService } from './transactions-list-toolbar-form-builder.service';

describe('TransactionsListToolbarFormBuilderService', () => {
  let service: TransactionsListToolbarFormBuilderService;

  beforeEach(() => {
    const testingModule = PeachTreeBankTestingModule();
    service = testingModule.inject(TransactionsListToolbarFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
