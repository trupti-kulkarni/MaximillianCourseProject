import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private snackBar: MatSnackBar) { }
  isLoginMode: boolean;
  isLoading:boolean
  error:string;
  

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    console.log("loginMode is---",this.isLoginMode);
    let authObservable : Observable<AuthResponse>;
    if(!this.isLoginMode){
      this.isLoading=true;
      authObservable=this.authService.signUP(loginForm.value.email,loginForm.value.password);
    }
    else{
      authObservable=this.authService.login(loginForm.value.email,loginForm.value.password)
    }
    
       authObservable.subscribe(
        (resp)=>{
          console.log(resp)
        },
        errorMsg=>{
          this.error=errorMsg;
          this.snackBar.open(errorMsg, "", {
            duration: 2000,
          });
          this.isLoading=false;
        }
      )
      this.isLoading=false;
    
      loginForm.reset();
    }
  
  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode;
  }

}
