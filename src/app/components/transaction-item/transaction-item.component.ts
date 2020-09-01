import { TransactionItem } from './../../interfaces/transaction-item.interface';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'peachtree-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItemComponent {
  @Input() data: TransactionItem = {
    amount: null,
    categoryCode: null,
    merchant: null,
    merchantLogo: null,
    transactionDate: null,
    transactionType: null,
  };
}
