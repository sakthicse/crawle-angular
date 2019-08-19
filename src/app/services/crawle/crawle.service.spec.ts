import { TestBed } from '@angular/core/testing';

import { CrawleService } from './crawle.service';

describe('CrawleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrawleService = TestBed.get(CrawleService);
    expect(service).toBeTruthy();
  });
});
