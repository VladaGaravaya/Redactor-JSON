import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { RedactorComponent } from './redactor/redactor.component';

const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'redactor', component: RedactorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
