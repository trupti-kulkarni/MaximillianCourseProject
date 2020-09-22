import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService,private router: Router) { }

  id:number;
  editMode:boolean;
  recipeForm: FormGroup;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params)=>{
        this.id= params['id'];
        this.editMode= params['id'] !=null;
        this.initForm();
      }
    )
    
  }

  private initForm(){
    
    let recipeName='';
    let imgUrl='';
    let description= '';
    let recipeIngredients= new FormArray([]);
    if(this.editMode){
      let editRecipe=this.recipeService.getRecipe(this.id);
      recipeName=editRecipe.name;
      imgUrl= editRecipe.imgPath;
      description=editRecipe.description;
      if(editRecipe.ingredients.length>0){
        for(let ingredient of editRecipe.ingredients){
          recipeIngredients.push(new FormGroup(
            {
              "name": new FormControl(ingredient.name,Validators.required),
              "amount": new FormControl(ingredient.amount,[Validators.required])
            }
          ))
        }
        
      }

    } 
    this.recipeForm= new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imgPath': new FormControl(imgUrl,Validators.required),
      'description': new FormControl(description,Validators.required),
      'ingredients': recipeIngredients
    })
  }

  AddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        "name": new FormControl('',Validators.required),
        "amount": new FormControl('',Validators.required)
      })
    )
  }

  onFormSubmit(){
    
    if(this.editMode){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value)
    }
    else{
      this.recipeService.addRecipe(this.recipeForm.value)
    }

    this.resetForm();
  }

  resetForm(){
    // this.editMode=false;
    // this.recipeForm.reset();
    this.router.navigate(["../"], {relativeTo: this.activeRoute});

  }
  deletIngredient(index:number){
    
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

}
