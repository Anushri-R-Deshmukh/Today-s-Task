import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateDisComponent } from './cate-dis.component';

describe('CateDisComponent', () => {
  let component: CateDisComponent;
  let fixture: ComponentFixture<CateDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CateDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CateDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
