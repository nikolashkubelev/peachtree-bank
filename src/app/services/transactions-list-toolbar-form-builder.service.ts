import { FormBuilder, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { TransactionsListToolbarControlsKeys, TransactionsListToolbarParams } from '../interfaces/transactions-list-toolbar.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionsListToolbarFormBuilderService {
  public form: FormGroup;
  public formControlsNames: Record<TransactionsListToolbarControlsKeys, TransactionsListToolbarControlsKeys> = {
    query: 'query',
    sorting: 'sorting'
  };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      [this.formControlsNames.query]: [''],
      [this.formControlsNames.sorting]: [{ type: null, order: null }]
    });
  }

  patchForm(form: FormGroup, value: TransactionsListToolbarParams): void {
    form.setValue(value);
  }
}
