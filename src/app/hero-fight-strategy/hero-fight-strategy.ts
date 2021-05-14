export interface IHeroFightStrategy {
  choose(id: string): boolean;
  fight(): void;
}
