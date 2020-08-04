import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class StringCapitalizerPipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.trim().split(' ');
    arr.forEach((v, i) => arr[i] = v.charAt(0).toUpperCase() + v.slice(1));
    return arr.join(' ');
  }
}

