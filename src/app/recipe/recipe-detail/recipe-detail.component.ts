import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  //@Input('recipe') recipe: Recipe;
  recipe: Recipe;
  id:number;
  constructor( private recipeService: RecipeService, private sLServie: ShoppingListService, private router:Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      (params)=>{
        this.id= +params['id'];
        this.recipe=this.recipeService.getRecipe(this.id);
        
      }
    )
  }

  goToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

    this.router.navigateByUrl('/shoppingList')
   
  }
  editRecipe(){
    //this.router.navigate(['/recipes/'+this.id+"/edit"]);
    this.router.navigate(['edit'],{relativeTo: this.activeRoute});
  }
  deleteRecipe(){
    
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'],{relativeTo: this.activeRoute});
  }

}
