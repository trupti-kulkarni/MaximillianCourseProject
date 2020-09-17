import { BehaviorSubject, Subject } from "rxjs";
import { Recipe } from "./recipe.model";

export class RecipeService{

   public recipeSelected= new BehaviorSubject<Recipe>(null);
   private recipes: Recipe[] =[
        new  Recipe('demo recipe', 'This is demo',"../../../assets/recipe1.jpg"),
        new Recipe ('demo 1 recipe','This is demo1',"../../../assets/recipe1.jpg")
      ];

    getRecipes(){
        return this.recipes.slice();
    }
    
}