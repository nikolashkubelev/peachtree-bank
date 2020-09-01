import { Injectable } from '@angular/core';
import { SortingParams, SortingOrdersList, SortingType } from '../interfaces/sorting.interface';
import { TransactionItem } from '../interfaces/transaction-item.interface';
import { TransactionsListToolbarParams } from 'src/app/interfaces/transactions-list-toolbar.interface';


@Injectable({
  providedIn: 'root'
})
export class TransactionsFilterService {

  filterTransactions(
    transactions: TransactionItem[],
    filters: TransactionsListToolbarParams
  ): TransactionItem[] {
    if (!filters) {
      return [...transactions];
    }
    const sortedTransactions = this.sortTransactions(transactions, filters.sorting);
    return this.filterByQuery(sortedTransactions, filters.query);
  }

  filterByQuery(
    transactions: TransactionItem[],
    query: string
  ): TransactionItem[] {
    if (!Array.isArray(transactions) || !query) {
      return transactions;
    }
    return transactions.filter((transaction) => {
      return transaction.merchant.toLowerCase().includes(query.toLowerCase());
    });
  }

  sortTransactions(
    transactions: TransactionItem[],
    sortingParams: SortingParams
  ): TransactionItem[] {
    if (!sortingParams) { return transactions; }
    const keyMap = this.getTransactionKeys();
    const ascSorted = [...transactions]
      .sort((a, b) => {
        const x = a[keyMap[sortingParams.type]].toString();
        const y = b[keyMap[sortingParams.type]].toString();
        return x.localeCompare(y, undefined, { numeric: true, sensitivity: 'base' });
      });
    return sortingParams.order === SortingOrdersList.ASC ? ascSorted : ascSorted.reverse();
  }

  getTransactionKeys(): Record<SortingType, keyof TransactionItem> {
    return {
      date: 'transactionDate',
      beneficiary: 'merchant',
      amount: 'amount',
    };
  }
}

