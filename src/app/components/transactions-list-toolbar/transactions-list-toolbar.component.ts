import { TransactionsListToolbarParams } from './../../interfaces/transactions-list-toolbar.interface';
import { Component, OnInit, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TransactionsListToolbarFormBuilderService } from './../../services/transactions-list-toolbar-form-builder.service';
import { SortingType, SortingTypesList, SortingOrdersList } from '../../interfaces/sorting.interface';

@Component({
  selector: 'peachtree-transactions-list-toolbar',
  templateUrl: './transactions-list-toolbar.component.html',
  styleUrls: ['./transactions-list-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsListToolbarComponent implements OnInit, OnDestroy {
  @Output() filtersChange = new EventEmitter<TransactionsListToolbarParams>();

  public sortingTypes: SortingType[] = [SortingTypesList.DATE, SortingTypesList.BENEFICIARY, SortingTypesList.AMOUNT];

  public form: FormGroup;
  public formControlNames: Record<string, string>;

  private subscriptions: Subscription[] = [];

  constructor(
    private transactionsListToolbarFormBuilderService: TransactionsListToolbarFormBuilderService
  ) {
    this.form = this.transactionsListToolbarFormBuilderService.buildForm();
    this.formControlNames = this.transactionsListToolbarFormBuilderService.formControlsNames;
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.getFiltersChangeSubscription()
    );

    this.transactionsListToolbarFormBuilderService.patchForm(this.form, {
      query: '',
      sorting: { type: SortingTypesList.DATE, order: SortingOrdersList.ASC }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getFiltersChangeSubscription(): Subscription {
    return this.form.valueChanges.subscribe(formValue => {
      this.filtersChange.emit(formValue);
    });
  }
}
