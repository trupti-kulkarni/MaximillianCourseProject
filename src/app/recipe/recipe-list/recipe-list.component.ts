import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';

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
  
  constructor( private recipeService: RecipeService,
     private route: Router,
      private activeRoute: ActivatedRoute,
      private dataService:DataStorageService) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
    this.recipeService.recipeUpdated.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes
      }
    )
  }
  createNewRecipe(){
    this.route.navigate(['new'],{relativeTo:this.activeRoute})
    
  }


  //loadSelectedRecipe(selectedRecipe: Recipe){
    // console.log("on event emit in recipe list")
    // console.log("selected recipe in recipe list component is", selectedRecipe);
    
    // this.selectedRecipeWas.emit(selectedRecipe);
  //}

}
