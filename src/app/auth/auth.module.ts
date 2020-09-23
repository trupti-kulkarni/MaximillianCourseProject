import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
@NgModule({
    declarations:[AuthComponent],
     imports:[
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        RouterModule.forChild(
            [{path:'auth',component: AuthComponent}]
            ),

    ],
})
export class AuthModule{

}