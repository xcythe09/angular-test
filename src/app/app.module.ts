import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
