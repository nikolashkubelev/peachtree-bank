import { createAction, props } from '@ngrx/store';
import { TransactionListActionTypes } from '../transactions-list.action-types';
import { HttpErrorResponse } from '@angular/common/http';

export const transactionListFail = createAction(
  TransactionListActionTypes.FAIL,
  props<{ error: HttpErrorResponse }>()
);
