import { Injectable, Injector } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";
import { RecipeService } from "./recipe.service";

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  public ingredientsUpdated = new Subject<Ingredient[]>();
  public editIngredient= new Subject<number>();

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number){
      return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  updateIngredient(index:number, newIngredient: Ingredient){
      this.ingredients[index]= newIngredient;
      this.ingredientsUpdated.next(this.ingredients.slice());
  }
  deleteIngredient(index:number) {
    this.ingredients.splice(index,1);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
}
