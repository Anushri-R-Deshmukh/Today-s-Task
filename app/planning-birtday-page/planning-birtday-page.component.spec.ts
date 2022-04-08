import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningBirtdayPageComponent } from './planning-birtday-page.component';

describe('PlanningBirtdayPageComponent', () => {
  let component: PlanningBirtdayPageComponent;
  let fixture: ComponentFixture<PlanningBirtdayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningBirtdayPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningBirtdayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
