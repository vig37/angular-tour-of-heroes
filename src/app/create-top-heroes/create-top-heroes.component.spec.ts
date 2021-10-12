import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTopHeroesComponent } from './create-top-heroes.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

describe('CreateTopHeroesComponent', () => {
  let component: CreateTopHeroesComponent;
  let fixture: ComponentFixture<CreateTopHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTopHeroesComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        DragDropModule
      ]
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
