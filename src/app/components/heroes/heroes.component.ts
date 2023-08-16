import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/models/mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes = HEROES;

  hero: Hero ={
    id: 0,
    name: ''
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }
}
