import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class CrudGuard implements CanActivateChild {
  constructor (
    private router: Router,
    private loginService: LoginService
  ){}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    const user = this.loginService.getRoles();
    // const user = JSON.parse(localStorage.getItem('user') as string)

    const acesso = route.data['acesso'];

    console.log('User', user);
    console.log('Rota Acesso', acesso);

    if(user.acesso.includes(acesso)){
      return true
    }

    // if(state.url.includes('edit')) {
    //   alert('Usuário sem permissão!')
    //   return false
    // }
    return false
  }
}
