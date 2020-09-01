import { TransactionItem } from './../../interfaces/transaction-item.interface';

export interface TransactionsListState {
  request: null;
  response: TransactionItem[];
  loading: boolean;
}
