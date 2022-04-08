import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealApiComponent } from './meal-api.component';

describe('MealApiComponent', () => {
  let component: MealApiComponent;
  let fixture: ComponentFixture<MealApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
