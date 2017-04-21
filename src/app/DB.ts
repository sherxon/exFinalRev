import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
/**
 * Created by sherxon on 4/20/17.
 */

@Injectable()
export class DBService {
  constructor(public http: Http) {}
  getData() {
    return [
      {
      id: 1,
      name: 'Sherali',
      email: 'men@rmail.u'
      },
      {
        id: 2,
        name: 'Alisher',
        email: 'alish@rmail.u2'
      },
      {
        id: 3,
        name: 'Sherxon',
        email: 'sherxonsh@rmail.u2'
      }
    ];
  }
  getPosts() {
   return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
  }
}
