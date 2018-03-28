import { FormControl} from '@angular/forms';
import { BaseObject } from '../objects/base-object';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {FormControlInterface} from './form-control-interface';

export class FormControlText extends FormControl implements FormControlInterface {
  private _elementData = new BaseObject();

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, validatorOrOpts, asyncValidator);
  }


  get elementData(): BaseObject {
    return this._elementData;
  }

  set elementData(value: BaseObject) {
    this._elementData = value;
  }
}
