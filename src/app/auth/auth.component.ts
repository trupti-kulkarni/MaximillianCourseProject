import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor() { }
  isLoginMode: boolean;

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm){
    console.log(loginForm.value);
    loginForm.reset();
  }
  onSwitchMode(){
    this.isLoginMode= !this.isLoginMode;
  }

}
