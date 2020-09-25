import { TestBed } from '@angular/core/testing';

import { ApihandlingsService } from './apihandlings.service';

describe('ApihandlingsService', () => {
  let service: ApihandlingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApihandlingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
