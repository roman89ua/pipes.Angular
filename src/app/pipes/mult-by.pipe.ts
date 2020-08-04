import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultByPipe implements PipeTransform{
  transform(value: number, value2: number = 1): number {
  return value * value2;
  }
}
