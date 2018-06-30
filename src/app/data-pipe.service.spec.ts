import { TestBed, inject } from '@angular/core/testing';

import { DataPipeService } from './data-pipe.service';

describe('DataPipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPipeService]
    });
  });

  it('should be created', inject([DataPipeService], (service: DataPipeService) => {
    expect(service).toBeTruthy();
  }));
});
