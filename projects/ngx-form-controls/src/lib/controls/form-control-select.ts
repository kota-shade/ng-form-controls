import {FormControl} from '@angular/forms';
import { ObjectFormSelect } from '../objects/object-form-select';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {FormControlInterface} from './form-control-interface';

export class FormControlSelect extends FormControl implements FormControlInterface {
  elementData = new ObjectFormSelect();

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, validatorOrOpts, asyncValidator);
  }
}
