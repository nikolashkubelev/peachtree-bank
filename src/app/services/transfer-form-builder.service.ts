import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { limitValidator } from '../validators/limit.validator';
import { positiveFloatTwoDecimalPlacesValidator } from '../validators/positiveFloatTwoDecimalPlaces.validator';
import { TransferFormControlsKeys, TransferForm } from '../interfaces/transfer-form.interface';

@Injectable({
  providedIn: 'root'
})
export class TransferFormBuilderService {
  public form: FormGroup;
  public formControlsNames: Record<TransferFormControlsKeys, TransferFormControlsKeys> = {
    fromAccount: 'fromAccount',
    toAccount: 'toAccount',
    amount: 'amount'
  };

  public initialValue: TransferForm = {
    fromAccount: null,
    toAccount: null,
    amount: null
  };

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.buildForm();
  }

  buildForm(): FormGroup {
    const { fromAccount, toAccount, amount } = this.initialValue;
    return this.formBuilder.group({
      [this.formControlsNames.fromAccount]: [{ value: fromAccount, disabled: true }, Validators.required],
      [this.formControlsNames.toAccount]: [toAccount, Validators.required],
      [this.formControlsNames.amount]: [amount, Validators.required]
    });
  }

  setAmountValidators(balance: number, limit: number): void {
    this.form.get(this.formControlsNames.amount).setValidators([
      limitValidator(balance, limit), positiveFloatTwoDecimalPlacesValidator(), Validators.min(0.01), Validators.required
    ]);
  }

  resetForm(): void {
    this.form.setValue(this.initialValue);
  }
}
