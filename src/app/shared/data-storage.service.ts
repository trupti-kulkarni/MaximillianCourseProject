import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map,tap} from "rxjs/operators";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({providedIn:'root'})
export  class DataStorageService{
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    saveRecipes(){
        let recipes= this.recipeService.getRecipes();
        return this.http.put("https://angular-demo-project-c7d6b.firebaseio.com/recipes.json",{
            recipes: recipes
        })
    }

    getRecipes(){
        return this.http
        .get<Recipe[]>(
          'https://angular-demo-project-c7d6b.firebaseio.com/recipes.json')
        .pipe(
          map(recipes => {
            return recipes['recipes'].map(recipe => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : []
              };
            });
          }),
          tap(recipes => {
            console.log("in tap recipes--",recipes)
            this.recipeService.setRecipes(recipes);
          })
        )
    }

}