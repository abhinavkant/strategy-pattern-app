import { TestBed } from '@angular/core/testing';

import { BatmanFightStrategyService } from './batman-fight-strategy.service';

describe('BatmanFightStrategyService', () => {
  let service: BatmanFightStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatmanFightStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
