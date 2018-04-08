import { Component, OnInit, ViewChild } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

import {FormControl, FormGroup} from '@angular/forms';
import { NgxFormControlText, NgxFormControlSelect, NgxFormControlMultiSelect, NgxFormControlCheckbox } from 'ngx-form-controls';
import { NpxControlDataSetter } from 'ngx-form-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formData = {
    _fields: {
      text: {
        _value: 'textValue',
        _error: 'TestError',
      },
      select: {
        _options: [
          { _value: '1', _label: '11'},
          { _value: '2', _label: '22'},
        ],
        _value: '2'
      },
      multiCheckbox: {
        _options: [
          { _value: '1', _label: '11'},
          { _value: '2', _label: '22'},
          { _value: '3', _label: '33'},
          { _value: '4', _label: '44'},
        ],
        _value: ['2', '3']
      },
      radio:  {
        _options: [
          { _value: '1', _label: '11'},
          { _value: '2', _label: '22'},
          { _value: '3', _label: '33'},
          { _value: '4', _label: '44'},
        ],
        _value: '2'
      },
      checkbox: {
        _value: true
      },
      textarea: {
        _value: 'textArea test value22'
      },
      checkbox2: {
        _value: 0
      },
      grp: {
        _fields: {
          grpText: {
            _value: 'grpTextValue',
            _mode: 'view'
          },
          grpSelect: {
            _value: '3',
            _options: [
              { _value: '1', _label: '11'},
              { _value: '2', _label: '22'},
              { _value: '3', _label: '333'},
            ],
          }
        }
      },
      selectVoid: {
          _options: [
              { _value: '1', _label: '11'},
              { _value: '2', _label: '22'},
              { _value: '', _label: 'Выберите'},
          ],
          _value: null
      },
    }
  };

  form = new FormGroup({
    text: new NgxFormControlText('22', []),
    select: new NgxFormControlSelect('', []),
    multiCheckbox: new NgxFormControlMultiSelect(['2'], []),
    radio: new NgxFormControlSelect('1', []),
    checkbox: new NgxFormControlCheckbox(false, []),
    checkbox2: new NgxFormControlCheckbox(0, []),
    textarea: new NgxFormControlText('Ареа'),
    grp: new FormGroup({
      grpText: new NgxFormControlText(''),
      grpSelect: new NgxFormControlSelect('', []),
    }),
    selectVoid: new NgxFormControlSelect(null, []),
  });

  constructor() {
  }

  ngOnInit() {
    NpxControlDataSetter.setControlsData(this.form, this.formData);
  }

  onSubmit() {
    console.log(this.form.value);
    NpxControlDataSetter.setControlsData(this.form, this.formData);
    return false;
  }
}
