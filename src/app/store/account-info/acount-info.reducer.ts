import { accountInfoUpdateBalance } from './actions/update-balance.action';
import { AccountInfo } from './../../interfaces/account-info.interface';
import { accountInfoSetInfo } from './actions/set-info.action';
import { createReducer, on, Action } from '@ngrx/store';

const initialState: AccountInfo = {
  name: null,
  balance: null,
  limit: null
};

export const accountInfoReducer = createReducer(
  initialState,
  on(accountInfoSetInfo, (state, { accountInfo }) => ({ ...state, ...accountInfo })),
  on(accountInfoUpdateBalance, (state, { amount }) => ({ ...state, balance: state.balance - amount })),
);

export function reducer(state: AccountInfo | undefined, action: Action) {
  return accountInfoReducer(state, action);
}
