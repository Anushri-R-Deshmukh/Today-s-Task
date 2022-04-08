import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifecycle2Component } from './lifecycle2.component';

describe('Lifecycle2Component', () => {
  let component: Lifecycle2Component;
  let fixture: ComponentFixture<Lifecycle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lifecycle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lifecycle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
