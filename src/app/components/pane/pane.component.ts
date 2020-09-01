import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PaneHeaderParams, PaneHeaderSizesList } from '../../interfaces/pane-header-params.interface';

@Component({
  selector: 'peachtree-pane',
  templateUrl: './pane.component.html',
  styleUrls: ['./pane.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaneComponent implements OnInit {
  @Input() headerParams: PaneHeaderParams = {
    icon: '',
    title: '',
    size: PaneHeaderSizesList.SMALL
  };

  constructor() { }

  ngOnInit(): void {
  }

}
