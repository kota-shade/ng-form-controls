import {BaseObject} from './base-object';

export class ValuePair {
  public constructor(
    public key: string,
    public value: any
  ) {}
}

export class ObjectFormSelect extends BaseObject {
  private _options = Array<ValuePair>();

  public constructor(data: object = {}) {
    super(data);
    this.initOptions(data);
  }

  public setData(data: object = {}): void {
    super.setData(data);
    this.options.splice(0);
    this.initOptions(data);
  }

  protected initOptions(data) {
    if (data['_options'] instanceof Array) {
      for (let i = 0; i < data['_options'].length; ++i) {
        const value = data['_options'][i]['value'] || data['_options'][i]['_value'] || '';
        const label = data['_options'][i]['label'] || data['_options'][i]['_label'] || '';
        const vp = new ValuePair(value, label);
        this.options.push(vp);
      }
    }
  }

  get options(): ValuePair[] {
    return this._options;
  }

  set options(value: ValuePair[]) {
    this._options = value;
  }
}
