export type TransferFormControlsKeys = 'fromAccount' | 'toAccount' | 'amount';

export interface TransferForm {
  fromAccount: string;
  toAccount: string;
  amount: number;
}
