import { createAction, props } from '@ngrx/store';
import { TransactionListActionTypes } from '../transactions-list.action-types';
import { TransactionItem } from '../../../interfaces/transaction-item.interface';

export const transactionListAddItem = createAction(
  TransactionListActionTypes.ADD_ITEM,
  props<{ transaction: TransactionItem }>()
);
