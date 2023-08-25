
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IUser, UserLogin, IToken } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = environment.api;
  private urlLogin = `${this.api}/login`;
  private urlUser = `${this.api}/user`;

  private userSubject = new BehaviorSubject<IUser>({user: '', acesso: []});

  constructor(
    private http: HttpClient
  ) {
    const user = localStorage.getItem('user');
    if(user){
      this.userSubject.next(JSON.parse(user));
    }
  }

  protected setToken(token: string) {
    localStorage.setItem('token', token);
  }

  protected getToken() {
    // console.log(localStorage.getItem('token'));
    return localStorage.getItem('token')
  }

  // protected setHeader(token: any): HttpHeaders {
  //   let ret = new HttpHeaders();
  //   ret = ret.set('token', token);
  //   return ret
  // }

  private setUserSubject(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user);
  }

  login(user: UserLogin): Observable<IUser> {
    return this.http.post<IUser>(this.urlLogin, user).pipe(
      tap((data: IUser) => {
        this.setUserSubject(data)
      })
    )
  }

  // user(token: any) {
  //   return this.http.get<any>(this.urlUser, {
  //     headers: this.setHeader(token)
  //   })
  // }

  getUser(){
    return this.userSubject.asObservable();
  }

  getRoles(){
    return this.userSubject.getValue();
  }

  logout() {
    this.userSubject.next({
      user: '',
      acesso: []
    });
    localStorage.clear()
    sessionStorage.clear();
  }
}
