import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService{

  constructor(private sLService: ShoppingListService){}

  private recipes: Recipe[] =[
    new  Recipe('Cake', 'This is chocolate cake',"../../../assets/recipe1.jpg",[new Ingredient('all purpose flour',1), new Ingredient('coco powder',2)]),
    new Recipe ('Burger','This is veg cheese burger',"../../../assets/recipe1.jpg",[new Ingredient('cheese',1),new Ingredient('potato',4)])
  ];
 public recipeUpdated= new Subject<Recipe[]>();
  
    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index: number){
      return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
      this.sLService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
      this.recipeUpdated.next(this.recipes);

    }
    updateRecipe(index: number,newRecipe:Recipe){
      this.recipes[index]= newRecipe;
      this.recipeUpdated.next(this.recipes);

    }
    
}