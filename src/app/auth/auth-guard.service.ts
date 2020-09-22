import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import {map,tap} from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(map(
            user=> {
               if(user){
                   return true;
               }
               return false;
            }
        ),tap(
            (isAuthenticated)=>{
                if(!isAuthenticated){ // if user is not authenticated
                    this.router.navigateByUrl('/auth');
                }
            }
        ));
    }

}