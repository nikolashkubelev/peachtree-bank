import { SortingOrder, SortingOrdersList, SortingType } from './../../interfaces/sorting.interface';
import { Component, OnInit, forwardRef, Input, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SortingParams } from '../../interfaces/sorting.interface';

@Component({
  selector: 'peachtree-sorting-bar',
  templateUrl: './sorting-bar.component.html',
  styleUrls: ['./sorting-bar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SortingBarComponent),
      multi: true
    }
  ]
})
export class SortingBarComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() sortingTypes: SortingType[] = [];

  public form: FormGroup;
  public formControlsNames: Record<string, string> = {
    sortingType: 'sortingType'
  };

  public sortingOrder: SortingOrder = null;
  private innerValue: SortingType;

  private subscriptions: Subscription[] = [];

  onChange = (sortingParams: SortingParams) => {};
  onTouched = () => {};

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.buildForm();
   }

  ngOnInit(): void {
    this.subscriptions.push(
      this.form.get(this.formControlsNames.sortingType).valueChanges.subscribe(value => {
        this.onChange(value);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      [this.formControlsNames.sortingType]: []
    });
  }

  setOrder(order: SortingOrder): void {
    this.sortingOrder = order;
  }

  changeOrder(): void {
    this.sortingOrder = this.sortingOrder === SortingOrdersList.ASC ? SortingOrdersList.DESC : SortingOrdersList.ASC;
  }

  isActive(sortingType: SortingType): boolean {
    return sortingType === this.innerValue;
  }

  setActive(event: Event, sortingType: SortingType): void {
    event.preventDefault();
    const prevValue = this.innerValue;

    this.innerValue = sortingType;

    if (!prevValue  || (prevValue === sortingType)) {
      this.changeOrder();
    }

    this.onChange({
      type: this.innerValue,
      order: this.sortingOrder
    });
  }

  writeValue(sortingParams: SortingParams): void {
    if (sortingParams) {
      const { type, order } = sortingParams;
      this.innerValue = type;
      this.sortingOrder = order;
      this.form.get(this.formControlsNames.sortingType).setValue(this.innerValue);
    }
  }

  registerOnChange(fn: (sorting: SortingParams) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

}
