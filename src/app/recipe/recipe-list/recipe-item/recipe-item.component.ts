import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input ('recipe') recipe : Recipe;
   @Input('index') index : number;
  //@Output() selectedRecipe = new  EventEmitter<void> ();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    //console.log("in recipe item component")

  }
}
