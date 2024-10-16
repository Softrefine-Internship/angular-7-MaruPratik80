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
      // {
      //   label: 'first name',
      //   type: 'text',
      //   isRequired: true,
      //   errorMessage: 'is required',
      //   hint: ' write text heare',
      // },
      // { label: 'number', type: 'number' },
      // { label: 'slider', type: 'slider', value: 30, hint: 'slider' },
      // {
      //   label: 'dropdown',
      //   type: 'dropdown',
      //   options: [1, 2],
      //   value: 2,
      //   isRequired: true,
      //   hint: 'select favorite number',
      // },
      // {
      //   label: 'checkbox',
      //   type: 'checkbox',
      // },
      // {
      //   type: 'checkbox',
      //   label: 'Married',
      //   isRequired: true,
      //   // value: ,
      //   hint: 'check if you are married',
      //   isVisible: true,
      //   errorMessage: 'required',
      // },
      // {
      //   label: 'textarea',
      //   type: 'textarea',
      //   hint: ' write text heare',
      //   value: 'adsdsfdfdfsdfdcscsacadsv',
      // },
      {
        label: 'test',
        type: 'dropdown',
        isRequired: true,
        options: ['test', 9, true],
      },
      {
        label: 'test checkbox',
        type: 'checkbox',
        isRequired: true,
      },
      {
        label: 'age',
        type: 'slider',
        hint: 'set your age',
        // value: ,
        isRequired: true,
      },
      {
        label: 'description',
        type: 'textarea',
        hint: 'add content des',
        isRequired: true,
      },
    ];

    this.dynamicFormJson.forEach((field: DynamicFormField) => {
      const control = new FormControl(
        field.hasOwnProperty('value') ? field.value : null,
        field.isRequired ? Validators.required : null
      );
      this.form.addControl(field.label, control);
    });
  }
  onSubmit() {
    this.submited = true;
    if (this.form.valid) console.log(this.form.value);
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
