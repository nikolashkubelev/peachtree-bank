import { TransactionItem } from 'src/app/interfaces/transaction-item.interface';
import { PeachTreeBankTestingModule } from '../app.testing.module';

import { TransactionsFilterService } from './transactions-filter.service';
import { SortingOrdersList, SortingTypesList } from '../interfaces/sorting.interface';

describe('TransactionsFilterService', () => {
  let service: TransactionsFilterService;
  const transactions: TransactionItem[] =
    [
      {
        amount: '82.02',
        categoryCode: '#12a580',
        merchant: 'The Tea Lounge',
        transactionDate: 1476933842000,
        transactionType: 'Card Payment',
        merchantLogo: ''
      },
      {
        amount: '84.64',
        categoryCode: '#d51271',
        merchant: 'Texaco',
        transactionDate: 1476926642000,
        transactionType: 'Card Payment',
        merchantLogo: ''
      },
      {
        amount: '84.76',
        categoryCode: '#12a580',
        merchant: 'The Tea Lounge',
        transactionDate: 1476840242000,
        transactionType: 'Card Payment',
        merchantLogo: ''
      },
      {
        amount: '22.10',
        categoryCode: '#c12020',
        merchant: 'Amazon Online Store',
        transactionDate: 1476836642000,
        transactionType: 'Online Transfer',
        merchantLogo: ''
      },
      {
        amount: '46.25',
        categoryCode: '#c89616',
        merchant: '7-Eleven',
        transactionDate: 1476782642000,
        transactionType: 'Card Payment',
        merchantLogo: ''
      },
      {
        amount: '19.72',
        categoryCode: '#e25a2c',
        merchant: 'H&M Online Store',
        transactionDate: 1476721442000,
        transactionType: 'Online Transfer',
        merchantLogo: ''
      },
      {
        amount: '68.87',
        categoryCode: '#1180aa',
        merchant: 'Jerry Hildreth',
        transactionDate: 1476635042000,
        transactionType: 'Transaction',
        merchantLogo: ''
      },
      {
        amount: '52.36',
        categoryCode: '#1180aa',
        merchant: 'Lawrence Pearson',
        transactionDate: 1476548642000,
        transactionType: 'Transaction',
        merchantLogo: ''
      },
      {
        amount: '75.93',
        categoryCode: '#12a580',
        merchant: 'Whole Foods',
        transactionDate: 1476541442000,
        transactionType: 'Card Payment',
        merchantLogo: ''
      },
      {
        amount: '142.95',
        categoryCode: '#fbbb1b',
        merchant: 'Southern Electric Company',
        transactionDate: 1476455042000,
        transactionType: 'Online Transfer',
        merchantLogo: ''
      }
    ];

  beforeEach(() => {
    const testingModule = PeachTreeBankTestingModule();
    service = testingModule.inject(TransactionsFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return filtered and sorted transactions', () => {
    const filteredTransactions = service.filterTransactions(transactions, {
      query: 'the',
      sorting: {
        type: SortingTypesList.DATE,
        order: SortingOrdersList.ASC
      }
    });
    expect(filteredTransactions).toEqual([transactions[9], transactions[2], transactions[0]]);
  });

  it('should return filter by query transactions', () => {
    const filteredByQueryTransactions = service.filterByQuery(transactions, 'the');
    expect(filteredByQueryTransactions).toEqual([transactions[0], transactions[2], transactions[9]]);
  });

  it('should return sorted transactions', () => {
    const sortedTransactions = service.sortTransactions(transactions, {
      type: SortingTypesList.DATE,
      order: SortingOrdersList.ASC
    });
    expect(sortedTransactions).toEqual([...transactions].reverse());
  });
});
