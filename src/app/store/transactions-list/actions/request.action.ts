import { createAction, props } from '@ngrx/store';
import { TransactionListActionTypes } from '../transactions-list.action-types';

export const transactionListRequest = createAction(
  TransactionListActionTypes.REQUEST,
  props<{ request: null }>()
);
