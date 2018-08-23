import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ){}
  canActivate(
    /*next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot*/)/*: Observable<boolean> | Promise<boolean> | boolean */{
  /* return this.authService.afAuth.authState
    .pipe(take(1),
          map(authState=>!!authState),
          tap(authenticated=>{
            if (!authenticated){
              this.router.navigate(['/login']);
            }
          })
        )*/
    if ( this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
  
  
}
