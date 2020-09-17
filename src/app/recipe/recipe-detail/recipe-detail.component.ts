import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from 'src/app/shared/recipe.service';
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
    
    //  this.recipeService.recipeSelected.subscribe(
    //   (recipe : Recipe)=>{
    //     console.log("recipe in recipe detail component is", recipe);
    //     this.recipe = recipe;
    //     this.sLServie.ingredientsUpdated.next(this.recipe.ingredients); // update ingredents from shoppinglist service
    //   },
    //   (error)=>{
    //     console.log("in error recipe Selected")
    //   }
    // )
  }

  goToShoppingList(){
    this.router.navigateByUrl('/shoppingList')
   // this.router.navigateByUrl("/shoppingList")
  }

}
