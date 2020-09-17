import { Component, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  ingredients : Ingredient[] =[
    new Ingredient("onions",10),
    new Ingredient("garlic",2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient)
    console.log(this.ingredients)
  }
  deleteIngrdient(){
    this.ingredients.pop();
  }

}
