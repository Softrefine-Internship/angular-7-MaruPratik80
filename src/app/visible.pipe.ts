import { Pipe, PipeTransform } from '@angular/core';
import { DynamicFormField } from './dynamicFormField.interface';

@Pipe({
  name: 'visible',
})
export class VisiblePipe implements PipeTransform {
  transform(value: any): any {
    return value?.filter((field: DynamicFormField) =>
      field.hasOwnProperty('isVisible') ? field.isVisible : true
    );
  }
}
