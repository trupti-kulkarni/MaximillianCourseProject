import {Component} from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
 selector : 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private datastorage: DataStorageService){}
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

}