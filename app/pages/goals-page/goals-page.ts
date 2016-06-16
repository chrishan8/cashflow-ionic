import {Component} from '@angular/core';
import {NavController, ActionSheet} from 'ionic-angular';
import {AddGoalsPage} from '../add-goals-page/add-goals-page';

/*
  Generated class for the GoalsPagePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  	templateUrl: 'build/pages/goals-page/goals-page.html',
})
export class GoalsPage {
  	constructor(public nav: NavController) {}

	openAS() {
		let actionSheet = ActionSheet.create({
			title: 'Goals',
			cssClass: 'action-sheets-goals-page',
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					handler: () => {
						console.log('Delete clicked');
					}
				}, {
					text: 'Add',
					handler: () => {
						console.log('Archive clicked');
						this.openPage(AddGoalsPage);
					}
				}, {
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});
		this.nav.present(actionSheet);
	}
	openPage(page) {
		this.nav.push(page);
	}
}
