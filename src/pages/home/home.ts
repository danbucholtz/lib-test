import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import uuid from 'node-uuid';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
    console.log('have a guid: ', uuid.v4());
  }
}
