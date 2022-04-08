import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegExpTestComponent } from './reg-exp-test.component';

describe('RegExpTestComponent', () => {
  let component: RegExpTestComponent;
  let fixture: ComponentFixture<RegExpTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegExpTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegExpTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
