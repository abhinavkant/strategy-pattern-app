import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent implements OnInit {

  @Input()
  heroItem!: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
