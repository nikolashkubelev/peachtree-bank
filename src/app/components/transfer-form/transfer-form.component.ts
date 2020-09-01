import { TransferItem } from './../../interfaces/transfer-item.interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { TransferFormBuilderService } from './../../services/transfer-form-builder.service';

@Component({
  selector: 'peachtree-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferFormComponent implements OnInit {
  @Input() currencySymbol = '';
  @Output() formSubmit = new EventEmitter<TransferItem>();

  public form: FormGroup;
  public formControlsNames: Record<string, string>;

  constructor(
    private transferFormBuilderService: TransferFormBuilderService
  ) {
    this.form = this.transferFormBuilderService.form;
    this.formControlsNames = this.transferFormBuilderService.formControlsNames;
   }

  ngOnInit(): void {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.formSubmit.emit(this.form.getRawValue());
    }
  }

}
