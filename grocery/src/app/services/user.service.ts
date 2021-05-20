import { Injectable } from '@angular/core';
import{ User} from '../models/User'
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
// import {catchError, tap} from 'rxjs/operators';
import {JwtResponse} from '../response/JwtResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<User> {
    
    return this.http.post<User>(`${this.baseURL}`, user);
  }


  login(loginForm): Observable<JwtResponse> {
  
    return this.http.post<JwtResponse>(`${this.baseURL}`, loginForm);
    // .pipe(
    //     tap(user => {
    //         if (user && user.token) {
    //             this.cookieService.set('currentUser', JSON.stringify(user));
    //             if (loginForm.remembered) {
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //             console.log((user.name));
    //             this.nameTerms.next(user.name);
    //             this.currentUserSubject.next(user);
    //             return user;
    //         }
    //     }),
    //     catchError(this.handleError('Login Failed', null))
    // );
}


}
