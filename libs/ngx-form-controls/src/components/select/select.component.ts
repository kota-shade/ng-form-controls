import { Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlSelect } from '../../controls/form-control-select';
import { ObjectFormSelect } from '../../objects/object-form-select';

@Component({
  selector: 'ngx-form-control-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlSelect('', {});
  @Input() elementClass = 'form-control';
  @Input() id = 'empty';

  constructor() { }

  ngOnInit() {
  }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }
  getValue() {
    for (const item of this.formElement.elementData.options) {
      if (this.isOptionSelected(item.key)) {
        return this.formElement.value;
      }
    }
  }

  isOptionSelected(key) {
    const lval = (key) ? key.toString() : '';
    const rval = this.formElement.value ? this.formElement.value.toString() : '';
    return (lval === rval);
  }
}
