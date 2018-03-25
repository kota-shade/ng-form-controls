import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgxTabsLibModule } from 'ngx-tabs-lib';
import { NgxFormControlsModule } from 'ngx-form-controls';

@NgModule({
  imports: [
    BrowserModule,
    NgxTabsLibModule,
    NgxFormControlsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
