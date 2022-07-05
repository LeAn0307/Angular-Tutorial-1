import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // Dấu @: dữ liệu đó|underfine, dấu ! chỉ có dữ liệu mình định nghĩa
  @Input() hero?: Hero;
  constructor() { }
  ngOnInit(): void {
  }
}
