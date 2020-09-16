import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input ('recipe') recipe : Recipe;
   @Output() selectedRecipe = new  EventEmitter<void> ();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(){
    this.selectedRecipe.emit();
  }
}
