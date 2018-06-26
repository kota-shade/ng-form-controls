import { ObjectDataInterface } from './object-data-interface';

export class BaseObject implements ObjectDataInterface {
  private _mode: string;
  private _key: string;
  private _value: any;
  private _default: any;

  constructor(data: object = {}) {
    this._setData(data);
  }

  setData(data: object = {}): void {
    this._setData(data);
  }

  private _setData(data: object) {
    this.key = data['_key'] || '';
    this.value = data['_value'] || '';
    this.default = data['_default'] || '';
    this._mode = data['_mode'] || null;
  }

  get mode(): string {
    return this._mode;
  }

  set mode(value: string) {
    this._mode = value;
  }

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
  }

  get default(): any {
    return this._default;
  }

  set default(value: any) {
    this._default = value;
  }
}
