import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (
    private router: Router,
    private loginService: LoginService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    const user = this.loginService.getRoles();
    // const user = JSON.parse(localStorage.getItem('user') as string)

    const acesso = route.data['acesso'];

    console.log('User', user);
    console.log('Rota Acesso', acesso);

    if(user.user) {
      return true
    }

    this.router.navigate(['login']);
    return false

  }
}
