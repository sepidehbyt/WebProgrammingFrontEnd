import { TestBed } from '@angular/core/testing';

import { HomeSearchService } from './home-search.service';

describe('HomeSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeSearchService = TestBed.get(HomeSearchService);
    expect(service).toBeTruthy();
  });
});
