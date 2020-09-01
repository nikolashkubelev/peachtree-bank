import { TransactionsFilterService } from './../../services/transactions-filter.service';
import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { TransactionItem } from './../../interfaces/transaction-item.interface';
import { TransactionsListToolbarParams } from 'src/app/interfaces/transactions-list-toolbar.interface';
import { PaneHeaderParams, PaneHeaderSizesList } from 'src/app/interfaces/pane-header-params.interface';

@Component({
  selector: 'peachtree-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsListComponent implements OnChanges {
  @Input() transactions: TransactionItem[] = [];

  public filteredTransactions: TransactionItem[] = [];
  public filters: TransactionsListToolbarParams;
  public headerParams: PaneHeaderParams = { title: 'Recent Transactions', size: PaneHeaderSizesList.LARGE, icon: 'briefcase' };

  constructor(
    private transactionsFilterService: TransactionsFilterService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { transactions } = changes;
    if (transactions) {
      this.filteredTransactions = this.transactionsFilterService.filterTransactions(transactions.currentValue, this.filters);
    }
  }

  onFiltersChange(filters: TransactionsListToolbarParams): void {
    this.filters = filters;
    this.filteredTransactions = this.transactionsFilterService.filterTransactions(this.transactions, this.filters);
  }
}
