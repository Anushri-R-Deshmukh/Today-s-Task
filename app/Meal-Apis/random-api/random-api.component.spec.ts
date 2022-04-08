import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RandomApiComponent } from "./random-api.component";

describe("RandomApiComponent", () => {
  let component: RandomApiComponent;
  let fixture: ComponentFixture<RandomApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomApiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
