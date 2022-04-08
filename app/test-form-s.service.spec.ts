import { TestBed } from '@angular/core/testing';

import { TestFormSService } from './test-form-s.service';

describe('TestFormSService', () => {
  let service: TestFormSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestFormSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
