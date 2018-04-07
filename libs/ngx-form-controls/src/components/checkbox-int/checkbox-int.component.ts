import { Component, OnInit, Input } from '@angular/core';
import {FormControlCheckbox} from '../../controls/form-control-checkbox';

/**
 * Checkbox set integer value (1|0) to the FormControl
 */
@Component({
  selector: 'ngx-form-control-checkbox-int',
  templateUrl: './checkbox-int.component.html',
  styleUrls: ['./checkbox-int.component.css']
})
export class CheckboxIntComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlCheckbox(false, {});
  @Input() elementClass = 'custom-control-input';
  @Input() labelClass = 'custom-control-label';
  @Input() id = 'change-me';
  @Input() label = '';
  // myElement = new FormControlCheckbox();

  constructor() { }

  ngOnInit() { }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }

  changeValue(value) {
    this.formElement.setValue(+value);
  }
}
