import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
//SERVICE
@Injectable({
  providedIn: 'root'
})
export class HeroService {

// getHeroes(): Hero[] {
//   return HEROES;
// }

getHeroes():Observable<Hero[]>{
  // of(HEROES) returns an Observable<Hero[]>
  const heroes= of (HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return heroes;
}
  constructor(private messageService: MessageService) { }
}
