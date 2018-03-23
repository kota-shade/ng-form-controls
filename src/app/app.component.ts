import { Component } from '@angular/core';

import {FormControlText} from './modules/form-controls/controls/form-control-text';
import {FormControlSelect} from './modules/form-controls/controls/form-control-select';
import {FormGroup} from '@angular/forms';
import {FormControlMultiSelect} from './modules/form-controls/controls/form-control-multi-select';
import {FormControlCheckbox} from './modules/form-controls/controls/form-control-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  form = new FormGroup({
    text: new FormControlText('22'),
    select: new FormControlSelect('1', []),
    multiCheckbox: new FormControlMultiSelect([], []),
    radio: new FormControlSelect('1', []),
    checkbox: new FormControlCheckbox(false, []),
    textarea: new FormControlText('Ареа'),
  });

  public constructor() {
    const control = <FormControlSelect>this.form.get('select');
    control.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
      ]
    });
    const control2 = <FormControlMultiSelect>this.form.get('multiCheckbox');
    control2.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ]
    });
    const control3 = <FormControlSelect>this.form.get('radio');
    control3.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
