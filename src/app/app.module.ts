import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as components from './components/components';

@NgModule({
  declarations: [
    ...Object.values(components)
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [components.AppComponent]
})
export class AppModule { }
