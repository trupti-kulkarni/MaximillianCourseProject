import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface AuthResponse{
    kind: string;
    idToken:string;
    email: string;
    refreshToken :string;
    localId: string
  
  }
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http: HttpClient){}

    signUP(email:string,password:string){
        return this.http.post <AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyASx1-9fcecOS4krlaEYFDSu-SgTPuSs7w",{
            email: email,
            password:password,
            returnSecureToken:true
        }
            )
    }

}