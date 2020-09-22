import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "../shared/user.Model";

export interface AuthResponse{
    kind: string;
    idToken:string;
    email: string;
    refreshToken :string;
    localId: string;
    registered ?: boolean;
    expiresIn: string;
  
  }
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient, private router:Router){}
    user = new BehaviorSubject<User>(null);

    signUP(email:string,password:string){
        return this.http.post <AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASx1-9fcecOS4krlaEYFDSu-SgTPuSs7w",{
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(
            catchError(error=>{
               return this.handleError(error);
        }), tap(resp=>{
           const expirationDate= new Date( new Date().getTime()+ parseInt(resp.expiresIn)* 1000);
            this.user.next(new User(
                resp.email,
                resp.localId,
                resp.idToken,
                expirationDate)); 
        }));
    }

    login(email:string,password:string){
     return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyASx1-9fcecOS4krlaEYFDSu-SgTPuSs7w",{
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(
        catchError(error=>{
            return this.handleError(error);
        }), tap(resp=>{
            const expirationDate= new Date( new Date().getTime()+ parseInt(resp.expiresIn)* 1000);
            const loggedInUser= new User(
                resp.email,
                resp.localId,
                resp.idToken,
                expirationDate)
             this.user.next(loggedInUser);
             localStorage.setItem('userDate',JSON.stringify(loggedInUser)); 
            
         }))
         

    }

    logOut(){
        this.user.next(null);
        this.router.navigateByUrl('/auth');
    }

    autoLogin(){
       const userData= JSON.parse(localStorage.getItem('userDate'));
       console.log("in autologin", userData);
       if(!userData){
           return;
       }
       const loadUser=(new User(userData.email, userData.id, userData.token,new Date(userData.tokenExpiration)))
       console.log("in auto login load user is---",loadUser);
       if(loadUser._token){  
           console.log("in token validation")    // to check if token is authenticated
           this.user.next(loadUser);
       }
       
    }

    handleError(errorResp:HttpErrorResponse){
                let  errorMsg="An error Occured"
                if(!errorResp.error || !errorResp.error.error){
                
                return throwError(errorMsg);
            }
            switch(errorResp.error.error.message){
                case 'EMAIL_EXISTS':
                errorMsg="This email exists already";
                break;
                case 'EMAIL_NOT_FOUND':
                    errorMsg="email Not Found";
                case 'INVALID_PASSWORD':
                    errorMsg="password is invalid";
                case 'USER_DISABLED':
                    errorMsg="user is disabled";

                case 'OPERATION_NOT_ALLOWED':
                    errorMsg="this operation is not allowed"

            }

            return throwError(errorMsg);

    }


}