import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialAppModule } from './shared/ngmaterial.module';

import { AppComponent } from './app.component';
import { RedactorComponent } from './redactor/redactor.component';
import { InputComponent } from './input/input.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkColumnDef } from '@angular/cdk/table';
import { DialogComponent } from './redactor/dialog/dialog.component';
import { CreationNemItemComponent } from './redactor/creation-nem-item/creation-nem-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RedactorComponent,
    InputComponent,
    DialogComponent,
    CreationNemItemComponent
  ],
  imports: [
    MaterialAppModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    DialogComponent,
    CreationNemItemComponent
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
