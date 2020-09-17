import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}
   activeLinkIndex = -1;

  navLinks = [
    {
        label: 'Recipes',
        link: '/recipes',
        index: 0
    }, {
        label: 'Shopping List',
        link: '/shoppingList',
        index: 1
    }, 
];
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => this.router.url));
  });
}
  
}
