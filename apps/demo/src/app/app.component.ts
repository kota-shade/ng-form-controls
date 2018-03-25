import { Component, OnInit, ViewChild } from '@angular/core';
import { ɵTabsComponent as TabsComponent } from 'ngx-tabs-lib';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

import {FormGroup} from '@angular/forms';
import { NgxFormControlTextComponent } from 'ngx-form-controls';

import { NgxFormControlText } from 'ngx-form-controls';

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
    // select: new FormControlSelect('1', []),
    // multiCheckbox: new FormControlMultiSelect([], []),
    // radio: new FormControlSelect('1', []),
    // checkbox: new FormControlCheckbox(false, []),
    // textarea: new FormControlText('Ареа'),
  });
  @ViewChild(TabsComponent) tabs: TabsComponent;

  constructor() {}

  ngOnInit() {
    console.log(this.tabs);
  }

}
