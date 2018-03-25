import { Component, OnInit, Input } from '@angular/core';
import {FormControlCheckbox} from '../../controls/form-control-checkbox';

@Component({
  selector: 'form-control-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlCheckbox(false, {});
  @Input() elementClass = 'custom-control-input';
  @Input() labelClass = 'custom-control-label';
  @Input() id = '';
  @Input() label = '';

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
