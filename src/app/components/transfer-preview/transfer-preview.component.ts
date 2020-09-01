import { TransferItem } from './../../interfaces/transfer-item.interface';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'peachtree-transfer-preview',
  templateUrl: './transfer-preview.component.html',
  styleUrls: ['./transfer-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPreviewComponent {
  @Input() data: TransferItem;
}
