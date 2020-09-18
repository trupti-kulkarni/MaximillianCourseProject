import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";
import { RecipeService } from "./recipe.service";


export class ShoppingListService{
   private ingredients : Ingredient[]=[];
   
   public ingredientsUpdated= new Subject <Ingredient[]>(); 

   getIngredients(){
       return this.ingredients.slice();
   }

   addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
    public addIngredients(ingredients: Ingredient[]){
           
        this.ingredients.push(...ingredients);
        this.ingredientsUpdated.next(this.ingredients.slice());
         
    }
    public deleteIngredient(){
      this.ingredients.pop();
      this.ingredientsUpdated.next(this.ingredients.slice());
   }
}