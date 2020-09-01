import { AccountInfo } from './../../../interfaces/account-info.interface';
import { AccountInfoActionTypes } from './../account-info.action-types';
import { createAction, props } from '@ngrx/store';

export const accountInfoSetInfo = createAction(
  AccountInfoActionTypes.SET_INFO,
  props<{ accountInfo: AccountInfo }>()
);
