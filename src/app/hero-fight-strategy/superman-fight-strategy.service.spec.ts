import { TestBed } from '@angular/core/testing';

import { SupermanFightStrategyService } from './superman-fight-strategy.service';

describe('SupermanFightStrategyService', () => {
  let service: SupermanFightStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupermanFightStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
