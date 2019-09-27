import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('f', { static: false })
  form: NgForm;
  projectStatuses = [
    { id: 1, name: 'Stable' },
    { id: 2, name: 'Critical' },
    { id: 3, name: 'Finished' }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    console.log('form from params');
    console.log(form);

    console.log('form from property');
    console.log(this.form);
  }
}
