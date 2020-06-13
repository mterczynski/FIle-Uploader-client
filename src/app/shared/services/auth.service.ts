import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CookieService } from './cookie.service';
import { Subject } from 'rxjs/Subject';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

enum AuthEvent {
  logIn = 'logIn',
  logOut = 'logOut',
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private jwtHelper = new JwtHelperService(); // todo - try Dependency Injection - try to use Injector, or Provide, useClass
  private _eventSubject = new Subject<AuthEvent>();

  public get eventSubject() {
    return this._eventSubject;
  }

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  saveToken(token) {
    this.cookieService.setCookie('token', token, 5);
    this.eventSubject.next(AuthEvent.logIn);
  }

  logIn({usernameOrEmail, password}) {
    return this.http.post<any>(environment.apiUrl + '/login', {
      usernameOrEmail,
      password,
    });
  }

  logOut() {
    this.cookieService.removeCookie('token');
    this.router.navigate(['/']);
    this.eventSubject.next(AuthEvent.logOut);
  }

  getToken() {
    return this.cookieService.getCookie('token');
  }

  getUser() {
    if (this.getToken()) {
      return this.jwtHelper.decodeToken(this.getToken());
    }
    return null;
  }

  register({username, password, email}: {username: string, password: string, email: string}) {
    return this.http.post<any>(environment.apiUrl + '/register', {
      username,
      email,
      password,
    });
  }

}
