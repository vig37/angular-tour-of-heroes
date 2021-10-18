import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl(''),
    quote: new FormControl(''),
    imagePath: new FormControl(''),
    altText: new FormControl('')
  })

  // hero: Hero = {} as Hero;

  constructor(
    private heroService: HeroService,
    public location: Location,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    let hero = {  id: 0,
      name: this.formGroup.controls.name.value,
      quote: this.formGroup.controls.quote.value,
      imagePath: this.formGroup.controls.imagePath.value,
      altText: this.formGroup.controls.altText.value
    }
    if (!hero.name) { 
      this._snackBar.open('Failed to add hero. Need to input a name.', 'Okay');
      return; 
    }

    if (hero) {
      this.heroService.addHero(hero)
        .subscribe(() => this.goBack());
    }
    this._snackBar.open(hero.name + ' has been update successfully!', 'Okay');
  }
}