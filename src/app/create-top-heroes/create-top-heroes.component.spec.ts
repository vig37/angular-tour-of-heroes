import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopHeroesComponent } from './create-top-heroes.component';

describe('CreateTopHeroesComponent', () => {
  let component: CreateTopHeroesComponent;
  let fixture: ComponentFixture<CreateTopHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTopHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTopHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
