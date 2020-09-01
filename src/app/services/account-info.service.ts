import { Injectable, LOCALE_ID, Inject } from '@angular/core';
import { AccountInfo } from '../interfaces/account-info.interface';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {
  private currencyPipe = new CurrencyPipe(this.locale);

  constructor(
    @Inject(LOCALE_ID) public locale: string
  ) {}

  getAccountSummary(accountInfo: AccountInfo): string {
    return `${accountInfo.name} - ${this.currencyPipe.transform(accountInfo.balance)}`;
  }
}
