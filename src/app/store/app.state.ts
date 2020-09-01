import { AccountInfo } from './../interfaces/account-info.interface';
import { TransactionsListState } from './transactions-list/transactions-list.state';

export interface AppState {
  accountInfo: AccountInfo;
  transactionsList: TransactionsListState;
}
