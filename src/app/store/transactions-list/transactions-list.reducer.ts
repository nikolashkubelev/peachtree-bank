import { TransactionItem } from 'src/app/interfaces/transaction-item.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { TransactionsListState } from './transactions-list.state';
import { transactionListRequest } from './actions/request.action';
import { transactionListResponse } from './actions/response.action';
import { transactionListFail } from './actions/fail.action';
import { transactionListAddItem } from './actions/add-transaction.action';

const initialState: TransactionsListState = {
  request: null,
  response: [],
  loading: false,
};

export const transactionsListReducer = createReducer(
  initialState,
  on(transactionListAddItem, (state, { transaction }) => ({
    ...state,
    response: [...state.response, transactionNegativeAmount(transaction)],
  })),
  on(transactionListRequest, (state) => ({ ...state, loading: true })),
  on(transactionListResponse, (state, { response }) => ({
    ...state,
    response: response.map(transaction => transactionNegativeAmount(transaction)),
    loading: false,
  })),
  on(transactionListFail, (state) => ({
    ...state,
    response: [],
    loading: false,
  }))
);

export function reducer(
  state: TransactionsListState | undefined,
  action: Action
) {
  return transactionsListReducer(state, action);
}

function transactionNegativeAmount(
  transaction: TransactionItem
): TransactionItem {
  return { ...transaction, amount: negativeValue(transaction.amount) };
}

function negativeValue(value: string): string {
  return (-1 * Number(value)).toString();
}
