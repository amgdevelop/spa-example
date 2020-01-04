import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[];

  constructor(private heroesService: HeroesService,
    private router: Router) {

  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();

  }

  detailedHero(i) {
    this.router.navigate(['/heroe', i])
  }

}
