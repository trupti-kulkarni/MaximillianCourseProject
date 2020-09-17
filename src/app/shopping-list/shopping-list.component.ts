import { Component, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  ingredients : Ingredient[] ;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    console.log("shopping list ngonit");
   
    // this.shoppingListService.ingredientsUpdated.subscribe(
    //   (ingredients)=>{
    //     this.ingredients=ingredients;
    //     //console.log("ingredients in shopping list components---",this.ingredients)
    //   }
    // )
  }
  
}
