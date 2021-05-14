import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatmanFightStrategyService } from './hero-fight-strategy/batman-fight-strategy.service';
import { SupermanFightStrategyService } from './hero-fight-strategy/superman-fight-strategy.service';
import { WonderWomenFightStrategyService } from './hero-fight-strategy/wonder-women-fight-strategy.service';
import { HeroListItemComponent } from './hero-list-item/hero-list-item.component';
import { HeroListComponent } from './hero-list/hero-list.component';

export const FIGHT_STRATEGY_SERVICE_TOKEN = new InjectionToken<string>('FightStrategyService');

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: FIGHT_STRATEGY_SERVICE_TOKEN, useExisting: BatmanFightStrategyService, multi: true },
    { provide: FIGHT_STRATEGY_SERVICE_TOKEN, useExisting: SupermanFightStrategyService, multi: true },
    { provide: FIGHT_STRATEGY_SERVICE_TOKEN, useExisting: WonderWomenFightStrategyService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
