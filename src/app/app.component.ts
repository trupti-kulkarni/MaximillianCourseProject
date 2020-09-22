import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isAuthenticated : boolean;
   userSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService) {}
   activeLinkIndex = -1;

  navLinks = [
    {
        label: 'Recipes',
        link: '/recipes',
        index: 0
    }, {
        label: 'Shopping List',
        link: '/shoppingList',
        index: 1
    }, 
];
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => this.router.url));
  });

  this.userSubscription=this.authService.user.subscribe(
    (user)=>{
        if(user){
            this.isAuthenticated=true;
        }
    }
)
}
ngOnDestroy(){
  this.userSubscription.unsubscribe();
}
  
}
