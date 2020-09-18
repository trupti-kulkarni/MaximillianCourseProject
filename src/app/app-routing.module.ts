import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponentComponent} from "./recipe/recipe-start-component/recipe-start-component.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes=[
   {path:'', redirectTo:'/recipes', pathMatch: 'full'},
    {path: 'recipes',component:RecipeComponent, children: [
      {path:'', component:RecipeStartComponentComponent},
      {path:'new',component: RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent},
      {path:':id/edit', component:RecipeEditComponent},
      
    ]},
    
    {path:'shoppingList',component:ShoppingListComponent},
    
    
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{
    
}
