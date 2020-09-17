import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input ('recipe') recipe : Recipe;
  //@Output() selectedRecipe = new  EventEmitter<void> ();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    //console.log("in recipe item component")

  }

  onRecipeSelected(){
    //console.log("on recipe selected-----",this.recipe);

    this.recipeService.recipeSelected.next(this.recipe);
    //this.selectedRecipe.emit();
  }
}
