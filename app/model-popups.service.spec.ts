import { TestBed } from '@angular/core/testing';

import { ModelPopupsService } from './model-popups.service';

describe('ModelPopupsService', () => {
  let service: ModelPopupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelPopupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
