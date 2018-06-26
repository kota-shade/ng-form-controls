import {BaseObject} from './base-object';

export class ValuePairMultiSelect {
  public constructor(
    public key: string,
    public value: any,
  ) {}
}

export class ObjectFormMultiSelect extends BaseObject {
  private _options = Array<ValuePairMultiSelect>();

  constructor(data: object = {}) {
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
        this.options.push(new ValuePairMultiSelect(value, label));
      }
    }
  }

  get options(): ValuePairMultiSelect[] {
    return this._options;
  }

  set options(value: ValuePairMultiSelect[]) {
    this._options = value;
  }
}
