import { Component, Input, OnInit } from '@angular/core';
import { HeroFightStrategyProviderService } from '../hero-fight-strategy/hero-fight-strategy-provider.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent implements OnInit {

  @Input()
  heroItem!: Hero;

  constructor(private fightStrategyService: HeroFightStrategyProviderService ) { }

  ngOnInit(): void {
  }

  onFightButtonClick(id: number) {
    console.log(`>>>> onFightButtonClick ${id}`);
    const strategy = this.fightStrategyService.getStrategy(id);

    strategy.fight();
  }

}
