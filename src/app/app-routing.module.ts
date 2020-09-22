import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { pathToFileURL } from "url";
import { AuthGuard } from "./auth/auth-guard.service";
import { AuthComponent } from "./auth/auth.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeStartComponentComponent} from "./recipe/recipe-start-component/recipe-start-component.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeResolverService } from "./shared/recipe-resolver.servce";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes : Routes=[
      {path:'', redirectTo:'/auth', pathMatch: 'full'},
      {path: 'recipes',component:RecipeComponent,  canActivate:[AuthGuard],  children: [
      {path:'', component:RecipeStartComponentComponent},
      {path:'new',component: RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolverService]},
      {path:':id/edit', component:RecipeEditComponent, resolve:[RecipeResolverService]},
     
      
    ]},
    
    {path:'shoppingList',component:ShoppingListComponent},
    {path:"auth",component: AuthComponent}
    
    
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule{
    
}
