import { PaneHeaderSizesList } from './../../interfaces/pane-header-params.interface';
import { TransferItem } from './../../interfaces/transfer-item.interface';
import {
  Component,
  Output,
  EventEmitter,
  Inject,
  LOCALE_ID,
  ChangeDetectionStrategy,
} from '@angular/core';
import { getLocaleCurrencySymbol } from '@angular/common';
import { PaneHeaderParams } from '../../interfaces/pane-header-params.interface';

@Component({
  selector: 'peachtree-transfer-pane',
  templateUrl: './transfer-pane.component.html',
  styleUrls: ['./transfer-pane.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPaneComponent {
  public transferItem: TransferItem;
  public isFormShown = true;
  public headerParams: PaneHeaderParams = {
    title: 'Make a Transfer',
    size: PaneHeaderSizesList.SMALL,
    icon: 'refresh',
  };
  public currencySymbol: string;

  @Output() transfer = new EventEmitter<TransferItem>();

  constructor(@Inject(LOCALE_ID) public locale: string) {
    this.currencySymbol = getLocaleCurrencySymbol(this.locale);
  }

  onFormSubmit(transfer: TransferItem): void {
    this.isFormShown = false;
    this.transferItem = transfer;
  }

  onTransfer(): void {
    this.transfer.emit(this.transferItem);
    this.isFormShown = true;
  }
}
