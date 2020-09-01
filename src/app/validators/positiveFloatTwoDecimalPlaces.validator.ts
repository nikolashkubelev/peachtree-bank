import { AbstractControl, ValidatorFn } from '@angular/forms';

export function positiveFloatTwoDecimalPlacesValidator(): ValidatorFn {
  return (control: AbstractControl): { positiveFloatNumberTwoDecimalPlaces: { value: number } } | null => {
    const value = control.value;
    const positiveFloatNumberTwoDecimalPlacesPattern = /^\d*\.?\d{0,2}$/;
    const isPositiveFloatNumberTwoDecimalPlaces = positiveFloatNumberTwoDecimalPlacesPattern.test(value);
    return !isPositiveFloatNumberTwoDecimalPlaces ? { positiveFloatNumberTwoDecimalPlaces: { value: control.value } } : null;
  };
}
