import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTdfFormComponent } from './reg-tdf-form.component';

describe('RegTdfFormComponent', () => {
  let component: RegTdfFormComponent;
  let fixture: ComponentFixture<RegTdfFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegTdfFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTdfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
