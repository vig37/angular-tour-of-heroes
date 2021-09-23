import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mario', description: 'wahoo' },
      { id: 2, name: 'Luigi', description: 'luigi time'},
      { id: 3, name: 'Yoshi', description: 'yoshi' },
      { id: 4, name: 'Toad', description: 'create a short description' },
      { id: 5, name: 'Toadette', description: 'create a short description' },
      { id: 6, name: 'Princess Peach', description: 'create a short description' },
      { id: 7, name: 'Kirby', description: 'create a short description' },
      { id: 8, name: 'Princess Daisy', description: 'create a short description' },
      { id: 9, name: 'Bowser', description: 'create a short description' },
      { id: 10, name: 'Donkey Kong', description: 'create a short description' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}