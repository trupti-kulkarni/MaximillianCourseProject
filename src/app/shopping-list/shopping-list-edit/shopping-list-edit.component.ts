import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('formIngrdient') form;
  constructor(private shoppingListService: ShoppingListService) { }
  

  ngOnInit(): void {
  }

  addIngredient(name,amount){
       console.log("in add ingredients edit ");
   
       this.shoppingListService.addIngredient(new Ingredient(name.value, amount.value));
  }

  deleteIngredients(){
    this.shoppingListService.deleteIngredient();
  }

  reset(){
   // this.form.reset();
  }

}
