import { AbstractControl, ValidatorFn } from '@angular/forms';

export function limitValidator(balance: number, limit: number): ValidatorFn {
  return (control: AbstractControl): { limit: { value: number } } | null => {
    const overdraft = (balance - control.value) < limit;
    return overdraft ? { limit: { value: control.value } } : null;
  };
}
