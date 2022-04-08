import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermentAddressComponent } from './perment-address.component';

describe('PermentAddressComponent', () => {
  let component: PermentAddressComponent;
  let fixture: ComponentFixture<PermentAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermentAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermentAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
