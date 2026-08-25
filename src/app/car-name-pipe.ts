import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carName',
  standalone: false,
})
export class CarNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([A-Za-z]+)(\d+)/, '$1 $2');
  }
}
