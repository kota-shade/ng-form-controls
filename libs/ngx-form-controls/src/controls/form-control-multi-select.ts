import {FormControl} from '@angular/forms';
import { ObjectFormMultiSelect } from '../objects/object-form-multi-select';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {FormControlInterface} from './form-control-interface';

export class FormControlMultiSelect extends FormControl implements FormControlInterface {
  elementData = new ObjectFormMultiSelect();

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, validatorOrOpts, asyncValidator);
  }
}
