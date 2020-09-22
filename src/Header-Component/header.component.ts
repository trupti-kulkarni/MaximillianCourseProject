import {Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
 selector : 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private datastorage: DataStorageService, private authService: AuthService){}
    isAuthenticated:boolean;
    userSubscription: Subscription;
    ngOnInit(){
        this.userSubscription=this.authService.user.subscribe(
            (user)=>{
                if(user){
                    this.isAuthenticated=true;
                }
            }
        )
    }
    saveRecipes(){
        this.datastorage.saveRecipes().subscribe(
            resp=>{
                console.log("recipes saved")
            }
        )
    }

    fetchRecipes(){
        this.datastorage.getRecipes().subscribe();
    }
    onDestroy(){
        this.userSubscription.unsubscribe();
    }

}