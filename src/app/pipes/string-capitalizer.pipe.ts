import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class StringCapitalizerPipe implements PipeTransform {

  transform(value: string): string {
    const arr = value.trim().split(' ');
    arr.forEach((v, i) => arr[i] = v.charAt(0).toUpperCase() + v.slice(1));
    // for (let i = 0; i < arr.length; i++){
    //  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    // }
    return arr.join(' ');
  }
}

