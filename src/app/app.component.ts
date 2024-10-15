import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DynamicFormField } from './dynamicFormField.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-7';
  form = new FormGroup({});
  dynamicFormJson!: DynamicFormField[];
  submited = false;

  ngOnInit() {
    this.dynamicFormJson = [
      {
        label: 'text',
        type: 'text',
        isRequired: true,
        errorMessage: 'is required',
      },
      { label: 'number', type: 'number' },
      { label: 'slider', type: 'slider', value: 30 },
      {
        label: 'dropdown',
        type: 'dropdown',
        options: [1, 2],
        // value: 2,
      },
      {
        label: 'checkbox',
        type: 'checkbox',
      },
      {
        label: 'textarea',
        type: 'textarea',
      },
    ];

    this.dynamicFormJson.forEach((field: DynamicFormField) => {
      const control = new FormControl(
        field.hasOwnProperty('value') ? String(field.value) : null,
        field.isRequired ? Validators.required : null
      );
      this.form.addControl(field.label, control);
    });
  }
  onSubmit() {
    this.submited = true;
    console.log(this.form.value);
  }

  onReset() {
    this.submited = false;
    const resetValue: any = {};
    this.dynamicFormJson.forEach((field: DynamicFormField) => {
      if (field.hasOwnProperty('value')) {
        resetValue[field.label] = field.value;
      }
    });
    this.form.reset(resetValue);
  }
}
