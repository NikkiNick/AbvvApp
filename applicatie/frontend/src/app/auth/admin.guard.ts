import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AdminGuard implements CanActivate {

  
  constructor(private authService: AuthenticationService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user$.getValue()) {
      let rechten;
      this.authService.getUser(this.authService.user$.getValue()).subscribe(
        user => rechten = user.rechten
      );
      if(rechten == "admin"){
        return true;
      }
    }
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/401']);
    return false;
  }
}
