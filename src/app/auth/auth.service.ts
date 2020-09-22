import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export interface AuthResponse{
    kind: string;
    idToken:string;
    email: string;
    refreshToken :string;
    localId: string;
    registered ?: boolean;
  
  }
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    signUP(email:string,password:string){
        return this.http.post <AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASx1-9fcecOS4krlaEYFDSu-SgTPuSs7w",{
            email: email,
            password:password,
            returnSecureToken:true
        }).pipe(
            catchError(error=>{
               return this.handleError(error);
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
        }))
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