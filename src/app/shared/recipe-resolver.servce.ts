import { Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { DataStorageService } from "./data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorage: DataStorageService,
        private recipeService: RecipeService ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
        const recipes= this.recipeService.getRecipes();
        if(recipes.length==0){
            return this.dataStorage.getRecipes();
        }
        return recipes;
    }

}