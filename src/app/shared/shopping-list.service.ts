import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";
import { RecipeService } from "./recipe.service";


export class ShoppingListService{
   private ingredients : Ingredient[];
   
   public ingredientsUpdated= new BehaviorSubject <Ingredient[]>(null); 

    public addIngrdients(ingredient: Ingredient){
           
        this.ingredientsUpdated.subscribe(
            (ingredients)=>{
                this.ingredients=ingredients;
                this.ingredients.push(ingredient);
            }
        )
         
    }
    public deleteIngredient(){
        this.ingredientsUpdated.subscribe(
            (ingredients)=>{
                this.ingredients=ingredients;
                this.ingredients.pop();
            }
        )
        
    }
}