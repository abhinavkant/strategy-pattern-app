import { Component, Inject, OnInit } from '@angular/core';
import { FIGHT_STRATEGY_SERVICE_TOKEN } from '../app.module';
import { IHeroFightStrategy } from '../hero-fight-strategy/hero-fight-strategy';
import { Hero } from '../models/hero';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [
    { id: 1, name: 'Batman' },
    { id: 2, name: 'Superman' },
    { id: 3, name: 'Wonder Women' },
  ];

  constructor() {
   
  }

  ngOnInit(): void {
  }

}
