import {Component, Input, OnInit} from '@angular/core';
import {FormControl, AbstractControl} from '@angular/forms';

export function ngxErrorMessageError(params) {
  return params.message;
}

export function ngxErrorMessageRequired(params) {
  return 'This field is required';
}

export function ngxErrorMessageMinlength(params) {
  return 'The min number of characters is ' + params.requiredLength;
}
export function ngxErrorMessageMaxlength(params) {
  return 'The max allowed number of characters is ' + params.requiredLength;
}
export function ngxErrorMessagePattern(params) {
  return 'The required pattern is: ' + params.requiredPattern;
}

@Component({
  selector: 'ngx-form-control-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  private static errorMessages = {
    'error': ngxErrorMessageError,
    'required': ngxErrorMessageRequired,
    'minlength': ngxErrorMessageMinlength,
    'maxlength': ngxErrorMessageMaxlength,
    'pattern': ngxErrorMessagePattern
  };

  @Input()formElement: AbstractControl = new FormControl('');

  static setErrorMessageFunctor(type: string, functor) {
    ErrorMessageComponent.errorMessages['type'] = functor;
  }

  static getErrorMessageFunctor(type: string, functor) {
    return ErrorMessageComponent.errorMessages['type'];
  }

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
    return ret;
  }
}
