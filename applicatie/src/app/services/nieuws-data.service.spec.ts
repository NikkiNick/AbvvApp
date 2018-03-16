import { TestBed, inject } from '@angular/core/testing';

import { NieuwsDataService } from './nieuws-data.service';

describe('NieuwsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NieuwsDataService]
    });
  });

  it('should be created', inject([NieuwsDataService], (service: NieuwsDataService) => {
    expect(service).toBeTruthy();
  }));
});
