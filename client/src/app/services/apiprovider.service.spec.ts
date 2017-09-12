import { TestBed, inject } from '@angular/core/testing';

import { ApiproviderService } from './apiprovider.service';

describe('ApiproviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiproviderService]
    });
  });

  it('should be created', inject([ApiproviderService], (service: ApiproviderService) => {
    expect(service).toBeTruthy();
  }));
});
