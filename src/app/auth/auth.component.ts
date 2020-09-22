import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { combineAll } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService:AuthService) { }
  isLoginMode: boolean;

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    //console.log(loginForm.value);
    if(!this.isLoginMode){
      this.authService.signUP(loginForm.value.email,loginForm.value.password).subscribe(
        (resp)=>{
          console.log(resp)
        },
        error=>{
          console.log(error)
        }
      )

    }
    loginForm.reset();
  }
  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode;
  }

}
