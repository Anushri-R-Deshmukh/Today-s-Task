import { TestBed } from '@angular/core/testing';

import { CurdOptService } from './curd-opt.service';

describe('CurdOptService', () => {
  let service: CurdOptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurdOptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
