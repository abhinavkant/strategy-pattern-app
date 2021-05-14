import { TestBed } from '@angular/core/testing';

import { HeroFightStrategyProviderService } from './hero-fight-strategy-provider.service';

describe('HeroFightStrategyProviderService', () => {
  let service: HeroFightStrategyProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroFightStrategyProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
