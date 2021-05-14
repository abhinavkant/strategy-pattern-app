export interface IHeroFightStrategy {
  choose(id: number): boolean;
  fight(): void;
}
