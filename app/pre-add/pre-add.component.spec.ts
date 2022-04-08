import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreAddComponent } from './pre-add.component';

describe('PreAddComponent', () => {
  let component: PreAddComponent;
  let fixture: ComponentFixture<PreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
