import { Component, OnInit } from "@angular/core";
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',//khớp với tên của phần tử HTML xác định thành phần này trong mẫu của thành phần mẹ.
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})

//export ra de co the su dung o noi khac
export class HeroesComponent implements OnInit {

  hero: Hero= {id:1,name:'Windstorm'};

  //constructor
  constructor() { }

  //lifecycle hook. sau khi tao 1 component- ham dung de dt cac logic khoi tao
  ngOnInit(): void {

  }

}
