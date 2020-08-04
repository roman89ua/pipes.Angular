import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../post.interface';

@Pipe({
  name: 'filter'
})
export class SearchPipe implements PipeTransform {

  transform(post: Post[], search: string = ''): Post[] {
    if (!search.trim()){
      return post;
    }
    return post.filter( p => {
      return p.title.toLowerCase().includes(search.toLowerCase()) || p.text.toLowerCase().includes(search.toLowerCase());
    });
  }

}
