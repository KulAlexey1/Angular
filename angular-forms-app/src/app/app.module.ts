import { NotTestValueAsyncValidatorDirective } from './template-driven-form/notTestValueAsyncValidator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const appRoutes = [
  { path: '', redirectTo: 'reactive', pathMatch: 'full' },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TemplateDrivenFormComponent,
    NotTestValueAsyncValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
