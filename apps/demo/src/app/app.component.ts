import { Component, OnInit, ViewChild } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

import { FormGroup } from '@angular/forms';
import { NgxFormControlTextComponent } from 'ngx-form-controls';

import { NgxFormControlText, NgxFormControlSelect, NgxFormControlMultiSelect, NgxFormControlCheckbox } from 'ngx-form-controls';

// import { NgxFormControlText } from '../../../../libs/ngx-form-controls/src/controls/ngx-form-control-text';
// import {FormControlSelect} from '../../../../src/app/modules/form-controls/controls/form-control-select';
// import {FormControlText} from '../../../../src/app/modules/form-controls/controls/form-control-text';
// import {FormControlMultiSelect} from '../../../../src/app/modules/form-controls/controls/form-control-multi-select';
// import {FormControlCheckbox} from '../../../../src/app/modules/form-controls/controls/form-control-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form = new FormGroup({
    text: new NgxFormControlText('22'),
    select: new NgxFormControlSelect('1', []),
    multiCheckbox: new NgxFormControlMultiSelect(['2'], []),
    radio: new NgxFormControlSelect('1', []),
    checkbox: new NgxFormControlCheckbox(false, []),
    textarea: new NgxFormControlText('Ареа'),
  });

  constructor() {
    const control = <NgxFormControlSelect>this.form.get('select');
    control.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
      ]
    });
    const control2 = <NgxFormControlMultiSelect>this.form.get('multiCheckbox');
    control2.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ]
    });
    const control3 = <NgxFormControlSelect>this.form.get('radio');
    control3.elementData.setData({
      _options: [
        { _value: '1', _label: '11'},
        { _value: '2', _label: '22'},
        { _value: '3', _label: '33'},
        { _value: '4', _label: '44'},
      ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
