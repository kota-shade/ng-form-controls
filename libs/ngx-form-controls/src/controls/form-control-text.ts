import { FormControl} from '@angular/forms';
import { BaseObject } from '../objects/base-object';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';

export class FormControlText extends FormControl {
  elementData = new BaseObject();

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, validatorOrOpts, asyncValidator);
  }
}
