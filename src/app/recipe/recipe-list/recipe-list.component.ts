import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@Output()selectedRecipeWas= new EventEmitter<Recipe>();
   recipes: Recipe[];
  
  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
  }

  loadSelectedRecipe(selectedRecipe: Recipe){
    // console.log("on event emit in recipe list")
    // console.log("selected recipe in recipe list component is", selectedRecipe);
    
    // this.selectedRecipeWas.emit(selectedRecipe);
  }

}
