import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {DBService} from '../DB';
/**
 * Created by sherxon on 4/21/17.
 */

@Injectable()
export class ProfileGuard implements CanActivate {

  constructor(private db: DBService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean
    | Observable<boolean>
    | Promise<boolean> {
      for (const key in this.db.getData()) {
        if ( this.db.getData()[key].id === route.params.id * 1) {
          return true;
        }
      }
      return false;
  }


}
