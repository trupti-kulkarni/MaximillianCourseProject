import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  ingredients : Ingredient[] ;
  private ingredientUpdatedSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    console.log("shopping list ngonit");
   
    this.ingredients=this.shoppingListService.getIngredients();
    this.ingredientUpdatedSub=this.shoppingListService.ingredientsUpdated.subscribe(
      (ingredinets: Ingredient[])=>{
        this.ingredients=ingredinets;
      }
    )
  }
  onDestroy(){
    this.ingredientUpdatedSub.unsubscribe();
  }
  
}
