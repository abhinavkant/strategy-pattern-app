import { Injectable } from '@angular/core';
import { IHeroFightStrategy } from './hero-fight-strategy';

@Injectable({
  providedIn: 'root'
})
export class BatmanFightStrategyService implements IHeroFightStrategy {

  constructor() { }

  choose(id: string): boolean {
    return id === "2";
  }

  fight(): void {
    console.log('--- BatmanFightStrategyService');
  }
}
