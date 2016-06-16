import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

/*
  Generated class for the ProfilePagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  	templateUrl: 'build/pages/profile-page/profile-page.html'
})
export class ProfilePage {
	public user: any;
  	constructor(public nav: NavController) {}

  	openNewAccnt() {
  		
  	}

  	refreshAccnt(account) {

  	}
}
