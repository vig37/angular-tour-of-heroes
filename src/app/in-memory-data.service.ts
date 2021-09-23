import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mario', quote: '"wahoo"', imagePath: 'assets/hero-images/SMP_Icon_Mario.png'},
      { id: 2, name: 'Luigi', quote: '"luigi time"', imagePath: 'assets/hero-images/SMP_Icon_Luigi.png'},
      { id: 3, name: 'Yoshi', quote: '"yoshi"', imagePath: 'assets/hero-images/SMP_Icon_Yoshi.png' },
      { id: 4, name: 'Monty Mole', quote: '*belly slaps* (idk)', imagePath: 'assets/hero-images/SMP_Icon_Monty_Mole.png' },
      { id: 5, name: 'Peach', quote: 'something idk', imagePath: 'assets/hero-images/SMP_Icon_Peach.png' },
      { id: 6, name: 'Daisy', quote: 'also something idk', imagePath: 'assets/hero-images/SMP_Icon_Daisy.png' },
      { id: 7, name: 'Diddy', quote: '"banana slamma"', imagePath: 'assets/hero-images/SMP_Icon_Diddy.png' },
      { id: 8, name: 'Donkey Kong', quote: '"banana slamma"', imagePath: 'assets/hero-images/SMP_Icon_DK.png' },
      { id: 9, name: 'Bowser', quote: '"bwa-ha-ha-ha"', imagePath: 'assets/hero-images/SMP_Icon_Bowser.png' },
      { id: 10, name: 'Shy Guy', quote: '~silence~', imagePath: 'assets/hero-images/SMP_Icon_Shy_Guy.png' }
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