import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlMultiSelect } from '../../controls/form-control-multi-select';

@Component({
  selector: 'ngx-form-control-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlMultiSelect([], {});
  @Input() elementClass = 'form-control';
  @Input() id = '';
  @Input() wrapCheckboxClass = '';
  @Input() checkboxClass = '';
  @Input() checkboxLabelClass = '';

  constructor() { }

  ngOnInit() {
    console.log('KOTA elementData');
  }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }

  /**
   * обработчик мультиселектов, вешать на (change)
   * по изменению чекбокса устанавливает или убирает значение из hidden элемента мультеселекта
   *
   * @param event
   */
  changeMulti(event) {
    const currentData = this.formElement.value;
    const position: number = currentData.indexOf(event.target.value);
    if (event.target.checked === false) {
      if (~position) {
        currentData.splice(position, 1);
      }
    } else {
      if (position === -1) {
        currentData.push(event.target.value);
      }
    }
    this.formElement.setValue(currentData);
  }

}

