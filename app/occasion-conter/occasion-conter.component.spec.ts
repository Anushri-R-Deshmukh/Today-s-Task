import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionConterComponent } from './occasion-conter.component';

describe('OccasionConterComponent', () => {
  let component: OccasionConterComponent;
  let fixture: ComponentFixture<OccasionConterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionConterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionConterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
