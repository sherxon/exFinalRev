import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by sherxon on 4/21/17.
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  posts;
  newposts = [];
  transform(posts, value) {
    this.posts = posts;
    this.newposts = [];
    this.search(value);
    return this.newposts;
  }

  search(value: string ) {
    console.log(value);
      for ( const key in this.posts) {
      if( this.posts[key].title.indexOf(value) >= 0  || value.length === 0) {
        this.newposts.push(this.posts[key]);
      }
    }
  }
}
