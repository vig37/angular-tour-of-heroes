import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Mario', description: 'wahoo', imagePath: 'assets/hero-images/SMP_Icon_Mario.png'},
      { id: 2, name: 'Luigi', description: 'luigi time', imagePath: 'assets/hero-images/SMP_Icon_Luigi.png'},
      { id: 3, name: 'Yoshi', description: 'yoshi', imagePath: 'assets/hero-images/SMP_Icon_Yoshi.png' },
      { id: 4, name: 'Monty Mole', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Monty_Mole.png' },
      { id: 5, name: 'Peach', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Peach.png' },
      { id: 6, name: 'Daisy', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Daisy.png' },
      { id: 7, name: 'Diddy', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Diddy.png' },
      { id: 8, name: 'Donkey Kong', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_DK.png' },
      { id: 9, name: 'Bowser', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Bowser.png' },
      { id: 10, name: 'Shy Guy', description: 'create a short description', imagePath: 'assets/hero-images/SMP_Icon_Shy_Guy.png' }
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