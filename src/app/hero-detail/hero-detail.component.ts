import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // Dấu @: dữ liệu đó|underfine, dấu ! chỉ có dữ liệu mình định nghĩa
  @Input() hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getHero();

    setTimeout(() => {
      console.log('function excuted');
    }, 1000);

    console.log('abc');
  }

  getHero(): void {
  // Route.snapshot is a static image of the route information
  // The paramMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
  // Route parameters are always strings. The JavaScript Number function converts the string to a number
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroService.getHero(id).subscribe(hero => this.hero = hero);

  }

  // goBack() navigates backward one step in the browser's history stack
  // using the "Location service" injected previously.
  goBack(): void {
  this.location.back();
  }
  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
