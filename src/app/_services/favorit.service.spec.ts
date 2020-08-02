import { TestBed } from '@angular/core/testing';

import { FavoritService } from './favorit.service';

describe('FavoritService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritService = TestBed.get(FavoritService);
    expect(service).toBeTruthy();
  });
});
