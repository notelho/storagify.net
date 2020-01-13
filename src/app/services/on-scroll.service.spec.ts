import { TestBed } from '@angular/core/testing';

import { OnScrollService } from './on-scroll.service';

describe('OnScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnScrollService = TestBed.get(OnScrollService);
    expect(service).toBeTruthy();
  });
});
