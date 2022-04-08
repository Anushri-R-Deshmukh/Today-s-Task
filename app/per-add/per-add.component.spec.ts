import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAddComponent } from './per-add.component';

describe('PerAddComponent', () => {
  let component: PerAddComponent;
  let fixture: ComponentFixture<PerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
