import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroDetailComponent } from './hero-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SpyLocation } from '@angular/common/testing';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;
  let heroService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        NoopAnimationsModule
      ],
      providers: [
        {
          provide: Location,
          useClass: SpyLocation
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroService = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have goBack method and should call location.back', () => {
    spyOn(component.location, 'back');
    component.goBack();
    expect(component.goBack).toBeDefined();
    expect(component.location.back).toHaveBeenCalled();
  });

 describe('UpdateHero Function', () => {
    let updateHeroSpy: any;

    beforeEach(() => {
      updateHeroSpy = spyOn(heroService, 'updateHero').and.returnValue(of('test'));
    });

    // it('should save new changes to hero', () => {
    //   let mockHero = {
    //     id: 0,
    //     name: 'Toad',
    //     quote: 'yahoo',
    //     imagePath: 'someImage',
    //     altText: 'imageOfToad'
    //   };

    //   component.hero = mockHero;
    //   mockHero.quote = 'blah';
    //   component.save();
    //   expect(updateHeroSpy.save).toHaveBeenCalled();
    //   expect(updateHeroSpy.goBack).toHaveBeenCalled();
    // });
  });
});
