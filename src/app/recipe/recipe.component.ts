import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  //  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit(): void {

  }

  // onRecipeSelected(selectedRecipe : Recipe){
  //   console.log("in recipe--selected recipe is", selectedRecipe)
  //   this.selectedRecipe=selectedRecipe;
  // }

}
