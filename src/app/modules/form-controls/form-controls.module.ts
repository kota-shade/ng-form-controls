import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TextComponent } from './components/text/text.component';
import { SelectComponent } from './components/select/select.component';
import { RadioComponent } from './components/radio/radio.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { MultiCheckboxComponent } from './components/multi-checkbox/multi-checkbox.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TextComponent,
    SelectComponent,
    RadioComponent,
    TextareaComponent,
    MultiCheckboxComponent,
    CheckboxComponent,
  ],
  exports: [
    TextComponent,
    SelectComponent,
    RadioComponent,
    TextareaComponent,
    MultiCheckboxComponent,
    CheckboxComponent,
  ]
})
export class FormControlsModule { }
