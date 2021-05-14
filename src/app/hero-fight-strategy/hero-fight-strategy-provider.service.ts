import { Inject, Injectable } from '@angular/core';
import { FIGHT_STRATEGY_SERVICE_TOKEN } from '../app.module';
import { IHeroFightStrategy } from './hero-fight-strategy';



@Injectable({
  providedIn: 'root',
})
export class HeroFightStrategyProviderService {

  constructor(@Inject(FIGHT_STRATEGY_SERVICE_TOKEN) public heroStrategies: IHeroFightStrategy[]) { }

  public getStrategy(heroIdToChoose: number): IHeroFightStrategy {
    const heroStrategy = this.heroStrategies.filter(item => item.choose(heroIdToChoose));

    if(heroStrategy.length == 0) {
      throw new Error(`No strategy found for \'${heroIdToChoose}\'`);
    } else if (heroStrategy.length > 1) { // Chose exactly one strate
      const className = heroStrategy.map(item => item.constructor.name)
      throw new Error(`Multiple strategy found for \'${heroIdToChoose}\' => ${className}`);
    }

    return heroStrategy[0];

    // for (let heroStrategy of heroStrategies) {
    //   heroStrategy.fight();
    // }
  }
}
