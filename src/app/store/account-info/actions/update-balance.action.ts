import { AccountInfoActionTypes } from './../account-info.action-types';
import { createAction, props } from '@ngrx/store';

export const accountInfoUpdateBalance = createAction(
  AccountInfoActionTypes.UPDATE_BALANCE,
  props<{ amount: number }>()
);
