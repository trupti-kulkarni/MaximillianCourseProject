import { BehaviorSubject } from "rxjs";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService{
   private ingredients : Ingredient[] =[
        new Ingredient("onions",10),
        new Ingredient("garlic",2)
      ];
    public ingredientsUpdated= new BehaviorSubject <Ingredient[]>(this.ingredients);

    // public getIngredients(){
    //     return this.ingredients.slice();
    // }

    public addIngrdients(ingredient: Ingredient){
        this.ingredients.push(ingredient);
         this.ingredientsUpdated.next(this.ingredients);
    }
    public deleteIngredient(){
        this.ingredients.pop();
    }
}