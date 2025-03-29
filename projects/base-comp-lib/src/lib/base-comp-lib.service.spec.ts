import { TestBed } from '@angular/core/testing';

import { BaseCompLibService } from './base-comp-lib.service';

describe('BaseCompLibService', () => {
  let service: BaseCompLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCompLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
