import { TestBed } from '@angular/core/testing';

import { WonderWomenFightStrategyService } from './wonder-women-fight-strategy.service';

describe('WonderWomenFightStrategyService', () => {
  let service: WonderWomenFightStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WonderWomenFightStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
