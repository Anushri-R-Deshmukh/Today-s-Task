import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValMsgComponent } from './val-msg.component';

describe('ValMsgComponent', () => {
  let component: ValMsgComponent;
  let fixture: ComponentFixture<ValMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
