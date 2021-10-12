import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();

    heroService = TestBed.inject(HeroService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroService = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add Function', () => {
    let heroCount: number;
    let addHeroSpy: any;

    beforeEach(() => {
      heroCount = component.heroes.length;
      addHeroSpy = spyOn(heroService, 'addHero').and.returnValue(of('test'));
    });

    it('should add hero', () => {
      component.add('toad');
      expect(addHeroSpy).toHaveBeenCalled();
    });

    it('should not add hero if no name', () => {
      expect(addHeroSpy).not.toHaveBeenCalled();
      expect(component.heroes.length).toEqual(0);
    })

    it('should return if it is not trimmed', () => {
      component.add('   ');
      console.log(component.getHeroes());
      expect(component.getHeroes()).toBeUndefined();
    })

    it('should trim extra space', () => {  
      component.add('toad     ');
      expect(addHeroSpy).toHaveBeenCalled();
      expect(component.heroes.length).toEqual(heroCount + 1);
    });
  });

  describe('DeleteHero', () => {
    it('should delete a pose', () => {
      let mockHero = {
        id: 0,
        name: 'Toad',
        quote: 'yahoo',
        imagePath: 'someImage',
        altText: 'imageOfToad'
      };
      component.heroes.push(mockHero);
      component.delete(mockHero);
      expect(component.heroes.length).toEqual(0);      
    });
  });

});
