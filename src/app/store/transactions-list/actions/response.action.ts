import { createAction, props } from '@ngrx/store';
import { TransactionListActionTypes } from '../transactions-list.action-types';
import { TransactionItem } from '../../../interfaces/transaction-item.interface';

export const transactionListResponse = createAction(
  TransactionListActionTypes.RESPONSE,
  props<{ response: TransactionItem[] }>()
);
