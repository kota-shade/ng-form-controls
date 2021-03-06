import { Component, Input, OnInit} from '@angular/core';
import { FormControlSelect } from '../../controls/form-control-select';

@Component({
  selector: 'ngx-form-control-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlSelect('', {});
  @Input() id = 'empty';
  @Input() elementClass = 'custom-control-input';
  @Input() wrapRadioClass = 'custom-control custom-radio';
  @Input() radioLabelClass = 'custom-control-label';

  constructor() { }

  ngOnInit() {
  }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }
}
