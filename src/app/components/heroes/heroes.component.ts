import { Component } from '@angular/core';

import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  selectedHero?: Hero; 

  constructor(private heroService : HeroService, private messageService : MessageService) {}

  ngOnIgnit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  } 

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
    this.messageService.add('HeroesComponent: Selected hero id=${hero.id}');
  }
}
