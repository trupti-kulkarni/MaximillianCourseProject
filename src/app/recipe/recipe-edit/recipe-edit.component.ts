import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  id:number;
  editMode:boolean;
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (params)=>{
        this.id= params['id'];
        this.editMode= params['id'] !=null;
        console.log(this.editMode);
      }
    )
    
  }

}
