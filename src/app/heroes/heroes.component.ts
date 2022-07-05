import { Component, OnInit } from "@angular/core";
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',//khớp với tên của phần tử HTML xác định thành phần này trong mẫu của thành phần mẹ.
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})

//Thuc thi OnInit trong lifecycle
export class HeroesComponent implements OnInit {

  // hero :Hero= {id:1,name:'Windstorm'};
  //gan mang HEROES

  // heroes = HEROES;

  heroes :Hero[] = [];

  //ham onSelect
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  }
  //constructor
  constructor(private heroService: HeroService) {
    // constructor chi dung de khoi tao, "don't do anything"
   }
  //Get
 getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}
  //lifecycle hook. sau khi tao 1 component- ham dung de dt cac logic khoi tao
  ngOnInit(): void {
  this.getHeroes();
  }

}

