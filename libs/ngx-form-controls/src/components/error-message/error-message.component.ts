import {Component, Input, OnInit} from '@angular/core';
import {FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'ngx-form-control-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  private static errorMessages = {
    'error': (params) => params.message,
    // 'required': () => 'This field is required',
    // 'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    // 'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    // 'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    // 'years': (params) => params.message,
    // 'countryCity': (params) => params.message,
    // 'uniqueName': (params) => params.message,
    // 'telephoneNumbers': (params) => params.message,
    // 'telephoneNumber': (params) => params.message
  };

  @Input()formElement: AbstractControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  shouldShowErrors() {
    return this.formElement &&
     this.formElement.errors &&
      this.formElement.status === 'INVALID';
  }

  listOfErrors(): string[] {
    return Object.keys(this.formElement.errors)
      .map(field => this.getMessage(field, this.formElement.errors[field]));
  }

  private getMessage(type: string, params: any) {
    const ret = ErrorMessageComponent.errorMessages[type](params);
    console.log('KOTA err getMessage = ', ret, type, params);
    return ret;
  }
}
