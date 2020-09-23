import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { User } from "./user.Model";

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
    private tokenExpirationTime: any;

    signUP(email:string,password:string){
        return this.http.post <AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASx1-9fcecOS4krlaEYFDSu-SgTPuSs7w",{
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(
            catchError(error=>{
               return this.handleError(error);
        }), tap(resp=>{
            this.handleAuthentication(resp.email, resp.localId,resp.idToken,+resp.expiresIn);
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
            this.handleAuthentication(resp.email, resp.localId,resp.idToken,+resp.expiresIn);
             
            
         }))     

    }

    logOut(){
        this.user.next(null);
        localStorage.removeItem('userDate');
        this.router.navigateByUrl('/auth');
        if(this.tokenExpirationTime ){
          clearTimeout (this.tokenExpirationTime );
            
        }
        this.tokenExpirationTime=null;
    }
     handleAuthentication(email:string, id:string,token:string, tokenExpiration: number){ // to handle auto logout and expiration token
        const expirationDate= new Date( new Date().getTime()+ tokenExpiration* 1000);
        const loggedInUser= new User(email,id,token,expirationDate)
             this.user.next(loggedInUser);
             this.autoLogout(tokenExpiration*1000);
             localStorage.setItem('userDate',JSON.stringify(loggedInUser));
     }
    autoLogin(){
       const userData:{
        email : string;
        id: string;
        _token :string;
        _tokenExpiration: string;
       }= JSON.parse(localStorage.getItem('userDate'));
       console.log("in autologin", userData);
       if(!userData){
           console.log("user data is null")
           return;
       }
       const loadUser=(new User(
           userData.email, 
           userData.id, 
           userData._token,
           new Date(userData._tokenExpiration)))
       //console.log("in auto login token is---",userData._token_expiration);
       if(loadUser.token){  
           console.log("in token validation")    // to check if token is authenticated
           this.user.next(loadUser);
         
        const expirationDuration =
        new Date(userData._tokenExpiration).getTime() -
        new Date().getTime();
        console.log("expiration duration in auto login is--",expirationDuration);
         this.autoLogout(expirationDuration * 5000);
       }
       
    }
    autoLogout(expirationDuration: number) {
        this.tokenExpirationTime=setTimeout(() => {
        console.log("in auto logout--",expirationDuration);
          this.logOut();
        }, expirationDuration);

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