import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes : Routes=[
    {path:'', redirectTo:'/auth', pathMatch: 'full'},
    {path:'recipes',
    loadChildren: './recipe/recipe.module#RecipeModule'},
    {path:'shoppingList',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{
    
}
