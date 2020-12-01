import { TestBed } from '@angular/core/testing';

import { HeigchartsService } from './heigcharts.service';

describe('HeigchartsService', () => {
  let service: HeigchartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeigchartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
