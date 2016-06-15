import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {ProfilePage} from './pages/profile-page/profile-page';
import {GoalsPage} from './pages/goals-page/goals-page';
import {SpendingPage} from './pages/spending-page/spending-page';
import {InvestPage} from './pages/invest-page/invest-page';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  private rootPage = ProfilePage;
  private pages = [
    {title: 'Name', component: ProfilePage},
    {title: 'Goals', component: GoalsPage},
    {title: 'Spending', component: SpendingPage},
    {title: 'Invest', component: InvestPage}
  ];

  constructor(private platform:Platform, private menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.rootPage = page.component;
    this.menu.close();
  }
}

ionicBootstrap(MyApp)
