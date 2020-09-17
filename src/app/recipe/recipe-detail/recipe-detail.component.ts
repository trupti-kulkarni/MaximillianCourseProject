import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input('recipe') recipe: Recipe;
  recipe: Recipe
  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {

    console.log()
     this.recipeService.recipeSelected.subscribe(
      (recipe : Recipe)=>{
        console.log("recipe in recipe detail component is", recipe);
        this.recipe = recipe;
      },
      (error)=>{
        console.log("in error recipe Selected")
      }
    )
  }

}
