import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  e: number = Math.E;
  str = 'hello world';
  date: Date = new Date();

  floatDot = 0.423;

  obj = {
    a: 1,
    b: {
     c: 2,
     d: {
      e: 3,
       f: 4
     },
    },
  };
  value = 'some very long string to capitalize';

}
