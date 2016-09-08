import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ResultsPage } from '../results/results';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  template: `
  <ion-header>
  <ion-navbar white>
    <button menuToggle secondary>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Search</ion-title>
  </ion-navbar>
</ion-header>


<ion-content light>
  <form [formGroup]="form" (ngSubmit)="search()">
    <ion-list>

      <ion-item>
        <ion-label>Search</ion-label>
        <ion-input type="text" formControlName="term"></ion-input>
      </ion-item>
    </ion-list>

    <ion-list radio-group formControlName="filter">
      <ion-list-header>
        Filter
      </ion-list-header>

      <ion-item>
        <ion-label>Track Name</ion-label>
        <ion-radio value="track" secondary></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Artist Name</ion-label>
        <ion-radio value="artist" secondary></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>Album Name</ion-label>
        <ion-radio value="album" secondary></ion-radio>
      </ion-item>

      <ion-item>
        <ion-label>All of the above</ion-label>
        <ion-radio value="everything" secondary></ion-radio>
      </ion-item>

    </ion-list>
    <div padding>
      <button block secondary type="submit" [disabled]="!form.valid">Find Tracks</button>
    </div>
  </form>
</ion-content>
  `
})

export class SearchPage {
  private form = this.formBuilder.group({
    'term': ['', Validators.required],
    'filter': ['everything']
  });
  constructor(
    private nav: NavController,
    public formBuilder: FormBuilder
  ) {
  }
  search() {
    this.nav.push(ResultsPage, {
      'search': this.form.value
    });
  }
}