import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-mat-snack-bar',
  templateUrl: './mat-snack-bar.component.html',
  styleUrls: ['./mat-snack-bar.component.css']
})
export class MatSnackBarComponent implements OnInit {

  @Input('message') message: string;
  @Output() closeSnackBar= new EventEmitter<void>();
  matSnackbarReference: any;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
   this.matSnackbarReference= this.snackBar.open(this.message, "", {
      duration: 2000,
    });

    this.matSnackbarReference.afterDismissed().subscribe(
      ()=>{
        this.closeSnackBar.emit();
      }
    )
  }
  

}
