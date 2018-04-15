import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { decode } from '@angular/router/src/url_tree';


@Injectable()
export class AdminGuard implements CanActivate {

  
  constructor(private authService: AuthenticationService, private router: Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authService.isUserAdmin()){
      return true;
    }
  
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/403']);
    return false;
  }
}
