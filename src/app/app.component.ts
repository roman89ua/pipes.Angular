import {Component, OnInit} from '@angular/core';
import {Post} from './post.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{
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

  promise: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 4000);
  });

  date2: Date;

  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  ngOnInit(): void {
    this.date$.subscribe( d => {
      this.date2 = d;
    });
  }
}
