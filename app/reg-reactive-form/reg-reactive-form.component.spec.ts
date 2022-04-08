import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReactiveFormComponent } from './reg-reactive-form.component';

describe('RegReactiveFormComponent', () => {
  let component: RegReactiveFormComponent;
  let fixture: ComponentFixture<RegReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
