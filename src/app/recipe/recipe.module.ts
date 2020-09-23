import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponentComponent } from "./recipe-start-component/recipe-start-component.component";
import { RecipeComponent } from "./recipe.component";
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import {MatMenuModule} from '@angular/material/menu';
import { RecipesRoutingModule } from "./recipes-routing.module";

@NgModule({
    declarations:[
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent,
    RecipeStartComponentComponent
    ],
    exports:[],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatMenuModule,
        RecipesRoutingModule
        
    ]
})
export class RecipeModule{

}