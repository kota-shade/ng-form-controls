import {Component, Input, OnInit} from '@angular/core';
import {FormControlText} from '../../controls/form-control-text';

@Component({
  selector: 'ngx-form-control-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new FormControlText('', {});
  @Input() elementClass = '';
  @Input() id = 'empty';

  constructor() { }

  ngOnInit() {
  }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }
}
