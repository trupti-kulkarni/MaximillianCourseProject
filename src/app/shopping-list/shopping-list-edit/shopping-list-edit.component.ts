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
  
  constructor(private shoppingListService: ShoppingListService) { }
  @ViewChild('formIngredient', {static:false}) form : NgForm;
  subscription: Subscription;
  editIndex: number;
  editMode: boolean;
  editedIngredient: Ingredient;

  ngOnInit(): void {
    this.subscription= this.shoppingListService.editIngredient.subscribe(
     
      (index)=>{
        this.editedIngredient= this.shoppingListService.getIngredient(index);
        this.editMode=true;
        this.editIndex=index;
        this.form.form.patchValue({       // with set value got error about ngModel
          name: this.editedIngredient.name,
          amount:this.editedIngredient.amount
        })
      }
    )

  }

  addIngredient(form:NgForm){
      console.log("in add ingredient method")
       if(this.editMode){
        this.shoppingListService.updateIngredient(this.editIndex,new Ingredient(this.form.value.name,this.form.value.amount));
        
       }
      else{
        this.shoppingListService.addIngredient(new Ingredient(form.value.name, form.value.amount));
      }
      this.editMode=false;
      this.form.reset();
      
  }

  deleteIngredients(){
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.clearForm();
  }

  clearForm(){
   this.editMode=false;
   this.form.reset();
  
  }
  onDestroy(){
    this.subscription.unsubscribe();
  }

}
