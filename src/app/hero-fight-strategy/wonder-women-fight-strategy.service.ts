import { Injectable } from '@angular/core';
import { IHeroFightStrategy } from './hero-fight-strategy';

@Injectable({
  providedIn: 'root'
})
export class WonderWomenFightStrategyService implements IHeroFightStrategy {

  constructor() { }
  choose(id: string): boolean {
    return id === "3";
  }

  fight(): void {
    console.log('--- WonderWomenFightStrategyService');
  }
}
