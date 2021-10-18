import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  formGroup = new FormGroup({
    name: new FormControl(''),
    quote: new FormControl(''),
    imagePath: new FormControl(''),
    altText: new FormControl('')
  })

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    public location: Location,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {

    let hero = {  id: 0,
      name: this.formGroup.controls.name.value,
      quote: this.formGroup.controls.quote.value,
      imagePath: this.formGroup.controls.imagePath.value,
      altText: this.formGroup.controls.altText.value
    }
    if (!hero.name) { 
      this._snackBar.open('Failed to save hero. Need to input a name.', 'Okay');
      return; 
    }
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
    this._snackBar.open(this.hero?.name + ' has been updated successfully!', 'Okay');
  }
}