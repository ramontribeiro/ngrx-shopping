import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IUser } from "../models/usuario.model";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class UserDetalheResolver implements Resolve<IUser> {

  constructor(
    private loginService: LoginService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any {
      const user = this.loginService.getRoles();
      // const user = JSON.parse(localStorage.getItem('user') as string)

      console.log('UserDetalheResolver', user);
      return user
  }
}
