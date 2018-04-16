import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
import { GrowlModule } from 'primeng/growl';
import { MessageService } from 'primeng/components/common/messageservice';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    GrowlModule
  ],
  exports: [
    CalendarModule,
    GrowlModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
