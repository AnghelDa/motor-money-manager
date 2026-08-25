import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regNumber',
  standalone: false,
})
export class RegNumberPipe implements PipeTransform {
  transform(value: string): string {
    const format1 = /^([A-Za-z]{2})(\d{2})([A-Za-z]{3})$/;

    const format2 = /^([A-Za-z])(\d{2,3})([A-Za-z]{3})$/;

    if (format1.test(value)) {
      return value.replace(format1, '$1-$2-$3');
    }

    if (format2.test(value)) {
      return value.replace(format2, '$1-$2-$3');
    }
    return value;
  }
}
