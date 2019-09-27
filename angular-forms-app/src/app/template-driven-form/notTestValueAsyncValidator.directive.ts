import { Directive, forwardRef } from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  Validator,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
@Directive({
  selector:
    '[appNotTestValueAsyncValidator][formControlName], [appNotTestValueAsyncValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => NotTestValueAsyncValidatorDirective),
      multi: true
    }
  ]
})
export class NotTestValueAsyncValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return new Observable(observer => {
      setTimeout(() => {
        if (control.value != null && control.value.toLowerCase() === 'test') {
          observer.next({ notTestValue: true });
        } else {
          observer.next(null);
        }
      }, 500);
    }).pipe(first());
  }
}
