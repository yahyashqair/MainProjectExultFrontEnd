import { TestBed, inject } from '@angular/core/testing';

import { GetXdesService } from './get-xdes.service';

describe('GetXdesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetXdesService]
    });
  });

  it('should be created', inject([GetXdesService], (service: GetXdesService) => {
    expect(service).toBeTruthy();
  }));
});
