import { TestBed } from '@angular/core/testing';

import { GbLibService } from './gb-lib.service';

describe('GbLibService', () => {
  let service: GbLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
