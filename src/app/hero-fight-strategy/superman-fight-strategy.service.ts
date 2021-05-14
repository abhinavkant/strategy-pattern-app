import { Injectable } from '@angular/core';
import { IHeroFightStrategy } from './hero-fight-strategy';

@Injectable({
  providedIn: 'root'
})
export class SupermanFightStrategyService implements IHeroFightStrategy {

  constructor() { }
  choose(id: number): boolean {
    return id === 2;
  }

  fight(): void {
    console.log('--- SupermanFightStrategyService');
  }
}
