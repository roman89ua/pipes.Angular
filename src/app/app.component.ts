import {Component} from '@angular/core';
import {Post} from './post.interface';

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

  search = '';

  post: Post[] = [
    {title: 'Beer', text: 'All about beer.'},
    {title: 'Pizza', text: 'Allot of different tastes'},
    {title: 'Vine', text: 'Best drink ever'},
  ];

}
