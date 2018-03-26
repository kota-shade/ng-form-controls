import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

import {FormControlInterface} from '../controls/form-control-interface';

/**
 * пробегает по переданным данным и рекурсивно заполняет объект полученными данными
 * и структуру контрольных элементов.
 */
export class FormControlDataSetter {
  private static DISABLED_MODE = 'view';

  public static setControlsData(control: AbstractControl, data: object) {
    if (control instanceof FormGroup) {
      FormControlDataSetter.setFormGroupData(control, data);
    } else if (control instanceof FormArray) {
      FormControlDataSetter.setFormArrayData(control, data);
    } else if (control instanceof FormControl) {
      FormControlDataSetter.setFormControlData(control, data);
    }

  }

  public static setFormGroupData(control: FormGroup, data) {
    FormControlDataSetter.setControlMode(control, data);
    if (data['_fields'] !== undefined) {
      const dataFields = data['_fields'];
      for (const key in dataFields) {
        if (dataFields.hasOwnProperty(key) === false) { continue; }

        const fldCtrl = control.get(key);
        if (fldCtrl === null) { continue; }

        FormControlDataSetter.setControlsData(fldCtrl, dataFields[key]);
      }
    }
  }

  /**
   * Заполняет данными массив элементов формы FormArray
   */
  public static setFormArrayData(control: FormArray, data) {
    FormControlDataSetter.setControlMode(control, data);

    if (data['_items'] !== undefined) {
      let itemCtrl: AbstractControl;
      const dataItems: Array<any> = data['_items'];

      let i = 0;
      for (; i < dataItems.length; ++i) {
        const itemData = dataItems[i];
        if (control.length < i) { // добавляем новые
          itemCtrl = new FormGroup({});
          control.push(itemCtrl);
        } else {
          itemCtrl = control.controls[i];
        }
        FormControlDataSetter.setControlsData(itemCtrl, itemData);
      }

      for (; i < control.length;) {
        // есть лишние элементы формы, которые удаляем
        control.removeAt(i);
      }
    }
  }

  /**
   * заполняет данными FormControl объект
   */
  public static setFormControlData(control: FormControl, data): void {
    FormControlDataSetter.setControlMode(control, data);

    if (data['_default'] !== undefined && data['_default'] !== null) {
      control.setValue(data['_default']);
    }
    if (data['_value'] !== undefined && data['_value'] !== null) {
      control.setValue(data['_value']);
    }

    if (FormControlDataSetter.instanceOfFormControlInterface(control)) {
      control.elementData.setData(data);
      console.log('KOTA FormControlSelect SET DATA');
    }
  }

  static instanceOfFormControlInterface(object: any): object is FormControlInterface {
    return 'elementData' in object;
  }

  /**
   * выставляе DISABLE|ENABLE элемента, если выставлена mode в данных
   */
  public static setControlMode(control: AbstractControl, data) {
    if (data['_mode'] !== undefined) { // NB!!! мода указана явно - меняем disable у элемента
      if (data['_mode'] === this.DISABLED_MODE) {
        control.disable();
      } else {
        control.enable();
      }
    }
  }
}
