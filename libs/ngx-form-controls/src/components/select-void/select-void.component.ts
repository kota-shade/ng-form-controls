import {Component, Input, OnInit} from '@angular/core';
import {FormControlSelect} from '../../controls/form-control-select';
import { ValueMapperInterface } from './value-mapper-interface';

export class DefaultValueMapper implements ValueMapperInterface {
    optionToValue(value: string): any {
        return (value === '') ?  null : value;
    }
}

@Component({
  selector: 'ngx-form-control-select-void',
  templateUrl: './select-void.component.html',
  styleUrls: ['./select-void.component.css']
})
export class SelectVoidComponent implements OnInit {
  static commonValueMapper = new DefaultValueMapper();
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlSelect('', {});
  @Input() elementClass = 'form-control';
  @Input() id = 'empty';
  valueMapper: ValueMapperInterface;

  constructor() {
      this.valueMapper = SelectVoidComponent.commonValueMapper;
  }

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

  changeValue(value) {
      const elValue = this.valueMapper.optionToValue(value);
      this.formElement.setValue(elValue);
  }

  isOptionSelected(key) {
      const lval = (key) ? key.toString() : '';
      const rval = this.formElement.value ? this.formElement.value.toString() : '';
      return (lval === rval);
  }
}
