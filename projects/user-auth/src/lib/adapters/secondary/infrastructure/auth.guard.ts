import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { FirebaseAuthService } from './firebase-auth.service';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: FirebaseAuthService,
    private router: Router,
    private login: AngularFireAuth
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      return true;
    }

    return false;
  }
}
