import { transactionListResponse } from './actions/response.action';
import { TransactionListActionTypes } from './transactions-list.action-types';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TransactionItem } from 'src/app/interfaces/transaction-item.interface';

@Injectable()
export class TransactionsListEffects {

  loadTransactionsList$ = createEffect(() => this.actions$.pipe(
    ofType(TransactionListActionTypes.REQUEST),
    switchMap(() => this.http.get<{ data: TransactionItem[] }>('assets/mocks/transactions.json')
      .pipe(
        map(({ data }) => transactionListResponse({ response: data })),
        // Error can be handled e.g. show notification message with error text
        // transactionListFail({ error: { code: 0, text: 'Error text' }})
        catchError(() => [])
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
