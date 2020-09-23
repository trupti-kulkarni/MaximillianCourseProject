import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService, private snackBar: MatSnackBar, private router : Router) { }
  isLoginMode: boolean;
  isLoading:boolean
  error:string;
  

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    
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
          console.log("resp in auth observable is---",resp);
          this.isLoading=false;
          this.router.navigate(['/recipes']);

        },
        errorMsg=>{
          this.error=errorMsg;
          this.snackBar.open(errorMsg, "", {
            duration: 2000,
          });
          this.isLoading=false;
        }
      ) 
      loginForm.reset();
    }
  
  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode;
  }

}
