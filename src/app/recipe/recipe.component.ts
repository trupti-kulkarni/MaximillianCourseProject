import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

   selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(selectedRecipe){
    console.log("in recipe--selected recipe is", selectedRecipe)
    this.selectedRecipe=selectedRecipe;
  }

}
