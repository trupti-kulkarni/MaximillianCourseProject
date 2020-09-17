import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('formIngrdient') form;
  @Output() addedIngredient= new EventEmitter<Ingredient>();
  @Output() deletedIngredient= new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(name,amount){
   
        this.addedIngredient.emit(new Ingredient(name.value, (parseInt) (amount.value)));
  }

  deleteIngredients(){
    this.deletedIngredient.emit();
  }

  reset(){
    this.form.reset();
  }

}
