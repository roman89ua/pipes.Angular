import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MultByPipe} from './pipes/mult-by.pipe';
import { StringCapitalizerPipe } from './pipes/string-capitalizer.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    StringCapitalizerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

