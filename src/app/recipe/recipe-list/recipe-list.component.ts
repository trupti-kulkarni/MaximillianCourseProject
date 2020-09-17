import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()selectedRecipeWas= new EventEmitter<Recipe>();

  recipes: Recipe[] =[
    new  Recipe('demo recipe', 'This is demo',"../../../assets/recipe1.jpg"),
    new Recipe ('demo 1 recipe','This is demo1',"../../../assets/recipe1.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  loadSelectedRecipe(selectedRecipe: Recipe){
    console.log("on event emit in recipe list")
    console.log("selected recipe in recipe list component is", selectedRecipe);
    
    this.selectedRecipeWas.emit(selectedRecipe);
  }

}
