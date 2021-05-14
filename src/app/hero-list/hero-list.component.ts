import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { BatmanFightStrategyService } from '../hero-fight-strategy/batman-fight-strategy.service';
import { IHeroFightStrategy } from '../hero-fight-strategy/hero-fight-strategy';
import { SupermanFightStrategyService } from '../hero-fight-strategy/superman-fight-strategy.service';
import { WonderWomenFightStrategyService } from '../hero-fight-strategy/wonder-women-fight-strategy.service';
import { Hero } from '../models/hero';

export const TOKEN = new InjectionToken<string>('FightStrategyService');

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  providers: [
    { provide: TOKEN, useExisting: BatmanFightStrategyService, multi: true },
    { provide: TOKEN, useExisting: SupermanFightStrategyService, multi: true },
    { provide: TOKEN, useExisting: WonderWomenFightStrategyService, multi: true }
  ],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Wonder Women' },
  ];

  constructor(@Inject(TOKEN) public heroStrategies: IHeroFightStrategy[]) {

    var heroToChoose = "3";
    const heroStrategy = heroStrategies.filter(item => item.choose(heroToChoose))
    if(heroStrategy.length > 1) {
      const className = heroStrategy.map(item => item.constructor.name)
      throw new Error(`Multiple strategy found for \'${heroToChoose}\' => ${className}`);
    } else {
      heroStrategy[0].fight();
    }

    // for (let heroStrategy of heroStrategies) {
    //   heroStrategy.fight();
    // }
  }

  ngOnInit(): void {
  }

}
