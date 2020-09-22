import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map,tap, take} from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export  class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService:AuthService){}

    saveRecipes(){
        let recipes= this.recipeService.getRecipes();
        return this.http.put("https://angular-demo-project-c7d6b.firebaseio.com/recipes.json",{
            recipes: recipes
        })
    }

    getRecipes(){
        // take only subscribes for once , it will listen to subject change only once when the method is called 
                return this.http.get<Recipe[]>(   // exhaust map will wait to complete an execution of user observable 
                 'https://angular-demo-project-c7d6b.firebaseio.com/recipes.json'
            ).pipe(map(recipes => {
              return recipes['recipes'].map(recipe => {return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),tap(recipes => {
            console.log("in tap recipes--",recipes)
            this.recipeService.setRecipes(recipes);
          })
        )
        }

}