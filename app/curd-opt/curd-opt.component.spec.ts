import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOptComponent } from './curd-opt.component';

describe('CurdOptComponent', () => {
  let component: CurdOptComponent;
  let fixture: ComponentFixture<CurdOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdOptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
