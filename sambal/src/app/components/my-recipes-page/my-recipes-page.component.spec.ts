import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRecipesPageComponent } from './my-recipes-page.component';

describe('MyRecipesPageComponent', () => {
  let component: MyRecipesPageComponent;
  let fixture: ComponentFixture<MyRecipesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyRecipesPageComponent]
    });
    fixture = TestBed.createComponent(MyRecipesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
