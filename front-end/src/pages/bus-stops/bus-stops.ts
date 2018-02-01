import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BusNumberPage } from '../bus-number/bus-number';

@IonicPage()
@Component({
  selector: 'page-bus-stops',
  templateUrl: 'bus-stops.html',
})
export class BusStopsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  selectBus(){
    this.navCtrl.push(BusNumberPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusStopsPage');
  }

}
