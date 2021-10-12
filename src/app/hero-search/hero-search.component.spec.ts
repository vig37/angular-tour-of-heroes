import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSearchComponent } from './hero-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';

describe('HeroSearchComponent', () => {
  let component: HeroSearchComponent;
  let fixture: ComponentFixture<HeroSearchComponent>;
  let heroService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSearchComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    heroService = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('SearchHero', () => {
    let searchHeroSpy: any;

    beforeEach(() => {
      searchHeroSpy = spyOn(heroService, 'searchHeroes').and.returnValue(of(''));
    });

    it('should not search for a nonexisting hero', () => {
      let mockHero = {
        id: 0,
        name: 'Not an Existing Hero',
        quote: 'Not real',
        imagePath: 'someImage',
        altText: 'noHero'
      };
      component.search(mockHero.name);
      expect(searchHeroSpy).not.toHaveBeenCalled();
    });

    // it('should update search terms', () => {
    //   const searchTest = TestBed.inject(HeroService);
    //   const spy = spyOn(searchTest, "searchHeroes");
    //   component.search("test1");
    //   expect(spy).toHaveBeenCalled();
    // })

  });
});
