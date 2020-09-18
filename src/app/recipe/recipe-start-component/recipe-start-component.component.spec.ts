import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStartComponentComponent } from './recipe-start-component.component';

describe('RecipeStartComponentComponent', () => {
  let component: RecipeStartComponentComponent;
  let fixture: ComponentFixture<RecipeStartComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeStartComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
