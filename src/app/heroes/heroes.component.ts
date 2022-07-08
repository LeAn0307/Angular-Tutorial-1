import { Component, OnInit } from "@angular/core";
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
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
  selectedHero?: Hero;

   onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //constructor
  constructor(private heroService: HeroService,private messageService: MessageService) {
  // constructor chi dung de khoi tao, "don't do anything"
  }
  //lifecycle hook. sau khi tao 1 component- ham dung de dt cac logic khoi tao
  ngOnInit(): void {
  this.getHeroes();
  }

  //Get
  getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //Add
  add(name: string): void {

    name = name.trim();
     console.log("Name",name);
    console.log("NameTrim",name.trim());
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  //Delete
  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero.id).subscribe();
}
}

