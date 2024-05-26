// auth.guard.ts

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if(this.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  isLoggedIn(): boolean {
    if(sessionStorage.getItem('role')!=null){
      return true;
    }
    return false;
  }
}