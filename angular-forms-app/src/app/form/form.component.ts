import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

// REACTIVE FORM APPROACH

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  projectForm: FormGroup;
  projStatuses = [
    { id: 1, name: 'Stable' },
    { id: 2, name: 'Critical' },
    { id: 3, name: 'Finished' }
  ];

  constructor() {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(
        null,
        [
          Validators.required
          // , this.notTestProjectNameValidator
        ],
        this.notTestProjectNameValidatorAsync
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(this.projStatuses[0].id)
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  // notTestProjectNameValidator(fc: FormControl) {
  //   if (fc.value != null && fc.value.toLowerCase() === 'test') {
  //     return { incorrectProjectName: true };
  //   }
  //   return null;
  // }

  notTestProjectNameValidatorAsync(
    fc: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fc.value != null && fc.value.toLowerCase() === 'test') {
          resolve({ incorrectProjectName: true });
        } else {
          resolve(null);
        }
      }, 500);
    });
  }
}
