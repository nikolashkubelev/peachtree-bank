import { accountInfoSetInfo } from './../../store/account-info/actions/set-info.action';
import { accountInfoUpdateBalance } from './../../store/account-info/actions/update-balance.action';
import { TransferFormBuilderService } from './../../services/transfer-form-builder.service';
import { AccountInfoService } from './../../services/account-info.service';
import { transactionListAddItem } from './../../store/transactions-list/actions/add-transaction.action';
import { TransferItem } from './../../interfaces/transfer-item.interface';
import { transactionListRequest } from './../../store/transactions-list/actions/request.action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from '../../store/app.state';
import { TransactionItem } from '../../interfaces/transaction-item.interface';
import { AccountInfo } from 'src/app/interfaces/account-info.interface';

@Component({
  selector: 'peachtree-transactions-container',
  templateUrl: './transactions-container.component.html',
  styleUrls: ['./transactions-container.component.scss'],
})
export class TransactionsContainerComponent implements OnInit, OnDestroy {
  public accountInfo$: Observable<AccountInfo>;
  public transactionsList$: Observable<TransactionItem[]>;

  private subscriptions: Subscription[] = [];

  constructor(
    private store: Store<AppState>,
    private accountInfoService: AccountInfoService,
    private transferFormBuilderService: TransferFormBuilderService
  ) {
    this.transactionsList$ = this.store.pipe(
      select((state) => state.transactionsList.response)
    );
    this.accountInfo$ = this.store.pipe(select((state) => state.accountInfo));
  }

  ngOnInit(): void {
    this.store.dispatch(
      accountInfoSetInfo({
        accountInfo: {
          name: 'Free Checking(4692)',
          balance: 5824.76,
          limit: -500,
        },
      })
    );
    this.store.dispatch(transactionListRequest({ request: null }));

    this.subscriptions.push(
      this.accountInfo$.subscribe((accountInfo) => {
        const accountSummary = this.accountInfoService.getAccountSummary(
          accountInfo
        );
        this.transferFormBuilderService.form
          .get(this.transferFormBuilderService.formControlsNames.fromAccount)
          .setValue(accountSummary);
        this.transferFormBuilderService.setAmountValidators(
          accountInfo.balance,
          accountInfo.limit
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onTransfer(transfer: TransferItem): void {
    const transaction: TransactionItem = {
      amount: transfer.amount.toString(),
      categoryCode: 'orange',
      merchant: transfer.toAccount,
      merchantLogo: '',
      transactionDate: Date.now(),
      transactionType: 'Online Transfer',
    };
    this.transferFormBuilderService.resetForm();
    this.transferFormBuilderService.form.markAsUntouched();
    this.store.dispatch(transactionListAddItem({ transaction }));
    this.store.dispatch(accountInfoUpdateBalance({ amount: transfer.amount }));
  }
}
