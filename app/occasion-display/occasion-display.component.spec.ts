import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccasionDisplayComponent } from './occasion-display.component';

describe('OccasionDisplayComponent', () => {
  let component: OccasionDisplayComponent;
  let fixture: ComponentFixture<OccasionDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
